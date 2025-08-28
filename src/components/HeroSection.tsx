import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Star, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Tenho interesse em criar um site profissional. Gostaria de saber mais sobre o serviço.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-dark min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-luxury rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-luxury rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-luxury rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-card border border-border rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-foreground">
                Serviço Premium de Alta Qualidade
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-inter text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Transforme sua ideia em um{" "}
                <span className="text-primary relative">
                  site profissional
                  <div className="absolute -top-2 -right-2">
                    <Star className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </span>{" "}
                em apenas{" "}
                <span className="text-primary font-black">
                  5 dias
                </span>
              </h1>
              
              <p className="font-inter text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Receba um site{" "}
                <span className="font-semibold text-foreground">moderno, responsivo e pronto para gerar resultados</span>, 
                com domínio e hospedagem inclusos, por apenas{" "}
                <span className="font-bold text-primary text-2xl">
                  R$ 497,00
                </span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="default" 
                onClick={handleWhatsAppClick}
                className="font-inter text-sm px-6 py-3 h-auto"
              >
                <Zap className="w-4 h-4 mr-2 text-primary-foreground" />
                Quero meu site agora
              </Button>
              
              <Button 
                variant="outline" 
                size="default"
                className="font-inter text-sm px-6 py-3 h-auto"
              >
                Ver exemplos
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">Entrega garantida em 5 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">Suporte técnico premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-medium">100% Personalizado</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="relative rounded-3xl overflow-hidden shadow-premium group">
              <img 
                src={heroImage} 
                alt="Criação de sites profissionais"
                className="w-full h-auto object-cover transition-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-luxury opacity-0 group-hover:opacity-20 transition-luxury"></div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold">
              <Zap className="w-4 h-4 inline mr-1" />
              Entrega Express
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border text-foreground px-4 py-2 rounded-lg text-xs font-semibold">
              <Sparkles className="w-4 h-4 inline mr-1 text-primary" />
              100% Responsivo
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-luxury opacity-30 blur-xl scale-110 -z-10 animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;