import { Building, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver exceptional construction services that exceed expectations while maintaining the highest standards of quality and safety.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue excellence in every project, ensuring superior craftsmanship and attention to detail in all aspects of our work.",
    },
    {
      icon: Heart,
      title: "Client Focus",
      description: "Building lasting relationships through trust, transparency, and dedication to our clients' vision and satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BuildPro Construction</h1>
            <p className="text-xl text-primary-foreground/90">
              Building excellence and trust since 2000
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <Building className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold text-primary">Our Story</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground animate-fade-in">
              <p>
                Founded in 2000, BuildPro Construction has grown from a small family business into
                one of the region's most trusted construction companies. Our journey began with a
                simple vision: to provide honest, quality construction services that transform
                communities and exceed client expectations.
              </p>
              
              <p>
                Over the past two decades, we have successfully completed over 500 projects ranging
                from residential homes to large-scale commercial developments. Our reputation for
                excellence is built on a foundation of skilled craftsmanship, innovative solutions,
                and unwavering commitment to our clients.
              </p>
              
              <p>
                Today, BuildPro Construction stands as a testament to what can be achieved through
                dedication, integrity, and a passion for building. We continue to push boundaries
                in construction technology and sustainable building practices while maintaining the
                personal touch that has defined us from the beginning.
              </p>
              
              <p>
                Our team of experienced professionals brings together expertise in all aspects of
                construction, from initial design consultation to final inspection. We pride
                ourselves on maintaining clear communication, adhering to timelines, and delivering
                projects that not only meet but exceed quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-12 animate-fade-in">
              Our Track Record
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Projects" },
                { number: "23", label: "Years" },
                { number: "98%", label: "Satisfaction" },
                { number: "150+", label: "Team Members" },
              ].map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
