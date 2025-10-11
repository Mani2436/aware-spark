import { BookOpen, Briefcase, GraduationCap, Heart, ShoppingCart, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const utilizationAreas = [
  {
    icon: GraduationCap,
    title: "Education & Learning",
    description: "Access online courses, tutorials, and educational resources to expand your knowledge.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description: "Network, collaborate remotely, and access career opportunities from anywhere.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Shop safely online, compare prices, and access global marketplaces.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Video,
    title: "Entertainment",
    description: "Stream content responsibly and enjoy digital entertainment platforms.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Access telemedicine, fitness apps, and mental health resources online.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: BookOpen,
    title: "Information Access",
    description: "Research topics, stay informed, and access digital libraries and databases.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const UtilizationSection = () => {
  return (
    <section id="utilization" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Internet <span className="gradient-accent bg-clip-text text-transparent">Utilization</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the many ways you can leverage the internet for personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilizationAreas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 shadow-card animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${area.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth`} />
                
                <div className="relative flex flex-col items-center text-center">
                  <div className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${area.gradient} group-hover:scale-110 transition-smooth`}>
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilizationSection;
