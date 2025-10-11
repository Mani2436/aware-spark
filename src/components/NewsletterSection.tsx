import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().email("Invalid email address");

const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      emailSchema.parse(email);
      setError("");
      
      toast({
        title: "Subscribed!",
        description: "You're now subscribed to our newsletter.",
      });
      
      setEmail("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-primary/20">
            <Mail className="w-8 h-8 text-primary-foreground animate-glow" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Stay Updated on Internet Safety
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get the latest tips, news, and best practices delivered to your inbox monthly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className={`bg-background/90 backdrop-blur ${
                  error ? "border-destructive" : ""
                }`}
              />
              {error && (
                <p className="text-sm text-destructive mt-1 text-left">{error}</p>
              )}
            </div>
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
              <Check className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
