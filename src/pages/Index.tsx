import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">FAIM</h1>
            </div>
            <Badge variant="outline" className="bg-primary/10">
              Alpha Testing
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span className="font-extrabold">F</span><span className="font-extrabold">AI</span><span className="font-extrabold">M</span>
            </h1>
            <p className="text-2xl font-semibold text-foreground">
              Your inference provider for structured <span className="font-bold text-primary">Foundation AI Models</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Time-Series
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Zero-Shot Inference
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <TrendingUp className="h-4 w-4 mr-2" />
              Foundation Models
            </Badge>
          </div>
        </div>
      </section>

      {/* Current Models Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Currently Supported Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-primary" />
                  Chronos
                </CardTitle>
                <CardDescription>
                  Advanced time-series foundation model for forecasting and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Zero-shot inference capabilities for various time-series tasks including 
                  forecasting, anomaly detection, and pattern recognition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                  Toto
                </CardTitle>
                <CardDescription>
                  State-of-the-art time-series foundation model for complex patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Specialized in handling complex temporal dependencies and 
                  multi-variate time-series analysis with high accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Testing CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Join Beta Testing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're currently in alpha testing phase. Be among the first to experience 
            the future of time-series AI inference. More models and features coming soon!
          </p>
          <div className="bg-card rounded-lg p-8 border">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Get Early Access</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe for updates and help us shape the platform by telling us 
              what features you're looking for the most.
            </p>
            <Button size="lg" asChild>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScx4UTZ6eBRcV5rFfn81tJbFu-xbaMaiQyofUzqf3uq2u3TMg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Users className="h-4 w-4 mr-2" />
                Join Beta Program
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-background">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-2">
            © 2024 FAIM - Foundation AI Models. Building the future of structured data inference.
          </p>
          <p className="text-muted-foreground text-sm">
            Contact us: <a href="mailto:support@faim.it.com" className="text-primary hover:underline">support@faim.it.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
