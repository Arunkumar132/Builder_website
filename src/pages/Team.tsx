import { Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Michael Anderson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "25+ years of construction industry leadership",
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Expert in operations and project management",
    },
    {
      name: "David Chen",
      role: "Lead Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Award-winning designer with sustainable focus",
    },
    {
      name: "Jennifer Rodriguez",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "15 years managing complex construction projects",
    },
    {
      name: "Robert Thompson",
      role: "Safety Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Certified safety specialist ensuring workplace excellence",
    },
    {
      name: "Emily Watson",
      role: "Finance Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Strategic financial planning and cost management",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-primary-foreground/90">
              Experienced professionals dedicated to building excellence
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        <button
                          className="bg-accent hover:bg-accent/80 p-2 rounded-full transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="h-4 w-4 text-accent-foreground" />
                        </button>
                        <button
                          className="bg-accent hover:bg-accent/80 p-2 rounded-full transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-4 w-4 text-accent-foreground" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for excellence
              in construction. Explore career opportunities with BuildPro Construction.
            </p>
            <a
              href="mailto:careers@buildpro.com"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-accent-foreground bg-accent hover:bg-accent/90 rounded-lg transition-colors"
            >
              View Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
