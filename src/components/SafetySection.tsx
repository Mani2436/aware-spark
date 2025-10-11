import { Shield, Eye, Key, UserCheck, AlertTriangle, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const safetyTips = [
  {
    icon: Key,
    title: "Strong Passwords",
    description: "Use unique, complex passwords for each account. Consider a password manager for security.",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Two-Factor Authentication",
    description: "Enable 2FA wherever possible to add an extra layer of security to your accounts.",
    color: "text-green-500",
  },
  {
    icon: Eye,
    title: "Privacy Settings",
    description: "Regularly review and update privacy settings on social media and online services.",
    color: "text-purple-500",
  },
  {
    icon: AlertTriangle,
    title: "Phishing Awareness",
    description: "Be cautious of suspicious emails, links, and requests for personal information.",
    color: "text-red-500",
  },
  {
    icon: UserCheck,
    title: "Verify Sources",
    description: "Always verify the authenticity of websites and sources before sharing information.",
    color: "text-cyan-500",
  },
  {
    icon: FileCheck,
    title: "Secure Browsing",
    description: "Use HTTPS websites, VPNs when needed, and keep your software updated.",
    color: "text-indigo-500",
  },
];

const SafetySection = () => {
  return (
    <section id="safety" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Safety <span className="gradient-accent bg-clip-text text-transparent">Tips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential practices to protect yourself and your data while navigating the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyTips.map((tip, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-glow transition-smooth hover:-translate-y-2 shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth" />
              <CardContent className="p-8 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <tip.icon className={`w-10 h-10 ${tip.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
