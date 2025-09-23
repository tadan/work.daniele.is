import React, { useEffect, useRef } from 'react';

interface ShaderBackgroundProps {
  className?: string;
}

const ShaderBackground: React.FC<ShaderBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const programRef = useRef<WebGLProgram | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    glRef.current = gl;

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: 1.0 - (event.clientY - rect.top) / rect.height, // Flip Y coordinate
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Vertex shader - simple pass-through
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Enhanced fragment shader with mouse interaction
    const fragmentShaderSource = `
      precision mediump float;
      
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;
      varying vec2 v_uv;
      
      // Simple noise function
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      // FBM with mouse influence
      float fbm(vec2 p) {
        float sum = 0.0;
        float amp = 0.5;
        
        // Mouse distance affects noise scale
        float mouseDistance = distance(u_mouse, v_uv);
        float mouseFactor = smoothstep(0.3, 0.7, mouseDistance);
        
        for(int i = 0; i < 3; i++) {
          sum += amp * noise(p * (1.0 + mouseFactor * 0.5));
          p *= 2.0;
          amp *= 0.5;
        }
        return sum;
      }
      
      void main() {
        vec2 uv = v_uv;
        
        // Slow time movement
        float time = u_time * 0.03;
        
        // Mouse influence
        float mouseDistance = distance(u_mouse, uv);
        float mouseGlow = smoothstep(0.4, 0.0, mouseDistance);
        
        // Create organic movement with mouse influence
        float n1 = fbm(uv * 2.0 + vec2(time * 0.1, time * 0.08) + mouseGlow * 0.1);
        float n2 = fbm(uv * 1.5 + vec2(time * 0.06, -time * 0.04));
        
        // Combine for subtle variation
        float pattern = n1 * 0.6 + n2 * 0.4;
        
        // Current color palette
        vec3 background = vec3(0.878, 0.878, 0.878);  // --background
        vec3 muted = vec3(0.808, 0.808, 0.808);       // --muted
        vec3 brand = vec3(0.855, 0.624, 0.412);       // --brand
        
        // Very subtle color mixing
        vec3 color = mix(background, muted, pattern * 0.08);
        
        // Add brand color influence near mouse
        color = mix(color, brand, mouseGlow * 0.03 + pattern * 0.015);
        
        // Subtle mouse glow effect
        color += mouseGlow * 0.02 * vec3(1.0, 0.95, 0.9);
        
        // Gentle vignette
        float vignette = 1.0 - smoothstep(0.4, 1.0, length(uv - 0.5));
        color *= 0.96 + 0.04 * vignette;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Create and compile shaders
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    // Create program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;

    // Set up geometry (full screen quad)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const positionLocation = gl.getAttribLocation(program, 'a_position');

    // Animation loop
    const startTime = Date.now();
    
    const animate = () => {
      if (!gl || !program) return;

      const currentTime = (Date.now() - startTime) * 0.001;

      // Resize canvas to match display size
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }

      gl.useProgram(program);

      // Set uniforms
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(mouseLocation, mouseRef.current.x, mouseRef.current.y);
      gl.uniform2f(resolutionLocation, displayWidth, displayHeight);

      // Set up position attribute
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (program) {
        gl.deleteProgram(program);
      }
      if (vertexShader) {
        gl.deleteShader(vertexShader);
      }
      if (fragmentShader) {
        gl.deleteShader(fragmentShader);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ShaderBackground;