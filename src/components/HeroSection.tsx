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
            <div className="inline-flex items-center bg-gradient-card border border-primary/30 rounded-full px-6 py-3 shadow-luxury">
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium bg-gradient-luxury bg-clip-text text-transparent">
                ✨ Serviço Premium de Alta Qualidade
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Transforme sua ideia em um{" "}
                <span className="bg-gradient-luxury bg-clip-text text-transparent relative">
                  site profissional
                  <div className="absolute -top-2 -right-2">
                    <Star className="w-8 h-8 text-primary animate-pulse" />
                  </div>
                </span>{" "}
                em apenas{" "}
                <span className="bg-gradient-luxury bg-clip-text text-transparent font-black">
                  5 dias
                </span>
              </h1>
              
              <p className="font-inter text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Receba um site{" "}
                <span className="font-semibold text-foreground">moderno, responsivo e pronto para gerar resultados</span>, 
                com domínio e hospedagem inclusos, por apenas{" "}
                <span className="font-bold bg-gradient-luxury bg-clip-text text-transparent text-3xl">
                  R$ 497,00
                </span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="font-inter text-xl px-12 py-8 h-auto relative group"
              >
                <div className="absolute inset-0 bg-gradient-luxury rounded-lg opacity-0 group-hover:opacity-100 transition-luxury blur animate-shimmer"></div>
                <Zap className="w-6 h-6 mr-3" />
                Quero meu site agora
              </Button>
              
              <Button 
                variant="luxury" 
                size="lg"
                className="font-inter text-lg px-8 py-8 h-auto"
              >
                📞 Ver exemplos
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="font-medium">✅ Entrega garantida em 5 dias</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="font-medium">🛡️ Suporte técnico premium</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse"></div>
                <span className="font-medium">💎 100% Personalizado</span>
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
            
            {/* Floating luxury badges */}
            <div className="absolute -top-6 -right-6 bg-gradient-luxury text-white px-6 py-4 rounded-2xl text-sm font-bold shadow-premium animate-float border border-primary/30">
              <Zap className="w-5 h-5 inline mr-2" />
              Entrega Express
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-card border border-primary/30 text-foreground px-6 py-4 rounded-2xl text-sm font-bold shadow-luxury animate-float" style={{animationDelay: '1s'}}>
              <Sparkles className="w-5 h-5 inline mr-2 text-primary" />
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