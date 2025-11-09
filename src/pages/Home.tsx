import { Link } from "react-router-dom";
import { Building2, Users, Award, ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: Building2,
      title: "Expert Construction",
      description: "Professional building services with over 20 years of experience in the industry.",
    },
    {
      icon: Users,
      title: "Skilled Team",
      description: "Dedicated professionals committed to delivering exceptional results on every project.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Certified excellence with a track record of successful project completions.",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "20+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Welcome to BuildPro Construction
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are a leading construction company specializing in residential, commercial, and
              industrial projects. With decades of experience and a commitment to excellence, we
              transform your vision into reality through quality craftsmanship and innovative
              solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
