
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-lg rotate-45 float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-40 w-12 h-12 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-lg float" style={{ animationDelay: '1s' }} />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default FloatingElements;
