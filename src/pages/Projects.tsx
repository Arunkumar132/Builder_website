import { useState } from "react";
import { X, MapPin, Calendar, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  location: string;
  completionDate: string;
  detailedDescription: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Skyline Tower",
      category: "Commercial",
      description: "Modern office complex in downtown district",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      client: "Metropolitan Properties",
      location: "Downtown Business District",
      completionDate: "December 2023",
      detailedDescription: "A state-of-the-art 25-story office building featuring sustainable design elements, premium finishes, and cutting-edge technology infrastructure. The project incorporated green building practices and achieved LEED Gold certification.",
    },
    {
      id: 2,
      title: "Riverside Residences",
      category: "Residential",
      description: "Luxury apartment community with amenities",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      client: "Riverside Development Corp",
      location: "Riverside Quarter",
      completionDate: "August 2023",
      detailedDescription: "A premium residential complex featuring 200 luxury units with modern amenities including fitness center, swimming pool, and landscaped gardens. Each unit offers panoramic river views and high-end finishes.",
    },
    {
      id: 3,
      title: "Tech Innovation Hub",
      category: "Commercial",
      description: "Contemporary tech campus facility",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      client: "TechVision Industries",
      location: "Silicon Valley East",
      completionDate: "May 2023",
      detailedDescription: "A 150,000 sq ft innovation center designed for collaborative work environments. Features include flexible workspaces, advanced meeting facilities, and energy-efficient systems throughout.",
    },
    {
      id: 4,
      title: "Green Valley Mall",
      category: "Commercial",
      description: "Modern shopping center with entertainment",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      client: "Retail Partners LLC",
      location: "Green Valley",
      completionDate: "March 2023",
      detailedDescription: "A comprehensive retail and entertainment destination spanning 300,000 sq ft. The project includes over 100 retail spaces, a cinema complex, and dining establishments with ample parking facilities.",
    },
    {
      id: 5,
      title: "Oakwood Medical Center",
      category: "Healthcare",
      description: "Advanced healthcare facility",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      client: "Oakwood Health System",
      location: "Medical District",
      completionDate: "January 2023",
      detailedDescription: "A modern 200-bed medical facility with advanced diagnostic and treatment capabilities. The project emphasized patient comfort, staff efficiency, and integration of the latest medical technology.",
    },
    {
      id: 6,
      title: "Heritage School Campus",
      category: "Educational",
      description: "State-of-the-art educational facility",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      client: "Heritage Education Board",
      location: "University Heights",
      completionDate: "November 2022",
      detailedDescription: "A comprehensive educational campus featuring modern classrooms, science labs, sports facilities, and an auditorium. Designed to accommodate 1,500 students with emphasis on sustainable and inspiring learning environments.",
    },
    {
      id: 7,
      title: "Industrial Park Phase 2",
      category: "Industrial",
      description: "Multi-purpose warehouse complex",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
      client: "Logistics Solutions Inc",
      location: "Industrial Zone",
      completionDate: "September 2022",
      detailedDescription: "A 500,000 sq ft industrial facility featuring climate-controlled warehousing, advanced loading systems, and modern office spaces. Built to support efficient logistics and distribution operations.",
    },
    {
      id: 8,
      title: "Coastal Resort Hotel",
      category: "Hospitality",
      description: "Luxury beachfront resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      client: "Coastal Hospitality Group",
      location: "Seaside Boulevard",
      completionDate: "July 2022",
      detailedDescription: "A premium 200-room resort hotel featuring oceanfront views, multiple dining venues, spa facilities, and conference centers. The design emphasizes luxury, comfort, and seamless integration with the coastal environment.",
    },
    {
      id: 9,
      title: "Downtown Parking Structure",
      category: "Infrastructure",
      description: "Multi-level parking facility",
      image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&h=600&fit=crop",
      client: "City Development Authority",
      location: "Central Downtown",
      completionDate: "April 2022",
      detailedDescription: "A 6-level parking structure accommodating 800 vehicles with modern security systems, efficient traffic flow design, and EV charging stations. The facility serves as a key infrastructure component for downtown development.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-primary-foreground/90">
              Explore our portfolio of successful construction projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in cursor-pointer overflow-hidden group"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Client</p>
                    <p className="text-sm">{selectedProject.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-sm">{selectedProject.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Completed</p>
                    <p className="text-sm">{selectedProject.completionDate}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Project Type</h3>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
