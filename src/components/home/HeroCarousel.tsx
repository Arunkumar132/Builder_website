import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Building Your Dreams Into Reality",
    subtitle: "Expert construction services for residential and commercial projects",
  },
  {
    image: hero2,
    title: "Quality Craftsmanship, Every Time",
    subtitle: "Experienced team delivering excellence in construction",
  },
  {
    image: hero3,
    title: "Your Vision, Our Expertise",
    subtitle: "From concept to completion, we build with precision",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-primary-foreground animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90">
                    View Our Projects
                  </Button>
                  <Button
                    size="lg" variant="outline" className="bg-white text-blue-900 border-white hover:bg-blue-900 hover:text-white hover:border-blue-900 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-primary-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
