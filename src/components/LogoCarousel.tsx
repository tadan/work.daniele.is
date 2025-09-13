import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import hyperIslandLogo from "@/assets/hyper-island.png"
import atlasCopcoLogo from "@/assets/atlas-copco.png"
import dfdsLogo from "@/assets/dfds.png"
import arlaLogo from "@/assets/arla.png"
import airmeeLogo from "@/assets/airmee.png"
import hmLogo from "@/assets/hm.png"
import accentureLogo from "@/assets/accenture.png"
import Autoplay from "embla-carousel-autoplay"

const logos = [
  { src: hyperIslandLogo, alt: "Hyper Island" },
  { src: atlasCopcoLogo, alt: "Atlas Copco" },
  { src: dfdsLogo, alt: "DFDS" },
  { src: arlaLogo, alt: "Arla" },
  { src: airmeeLogo, alt: "AIRMEE" },
  { src: hmLogo, alt: "H&M" },
  { src: accentureLogo, alt: "Accenture" },
]

const LogoCarousel = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12">
          Innovation guidance trusted by teams at
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="flex items-center justify-center p-6">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default LogoCarousel