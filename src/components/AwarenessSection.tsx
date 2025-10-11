import { Globe, Users, TrendingUp, Lock, Wifi, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const awarenessData = [
  {
    icon: Globe,
    title: "Global Connectivity",
    description: "Over 5 billion people worldwide are now connected to the internet, making it an essential part of modern life.",
  },
  {
    icon: Users,
    title: "Digital Citizens",
    description: "Understanding your digital footprint and online identity is crucial for responsible internet usage.",
  },
  {
    icon: TrendingUp,
    title: "Digital Economy",
    description: "E-commerce, remote work, and digital services have transformed how we live and do business.",
  },
  {
    icon: Lock,
    title: "Privacy Matters",
    description: "Protecting your personal information online is more important than ever in today's data-driven world.",
  },
  {
    icon: Wifi,
    title: "Always Connected",
    description: "Understanding the implications of constant connectivity helps you maintain a healthy digital life balance.",
  },
  {
    icon: Brain,
    title: "Digital Literacy",
    description: "Building skills to critically evaluate online content and distinguish fact from misinformation.",
  },
];

const AwarenessSection = () => {
  return (
    <section id="awareness" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Internet <span className="gradient-accent bg-clip-text text-transparent">Awareness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the digital landscape is the first step toward safe and effective internet usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awarenessData.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth hover:-translate-y-2 animate-scale-in shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;
