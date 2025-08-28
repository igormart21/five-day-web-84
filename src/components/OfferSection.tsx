import { Button } from "@/components/ui/button";
import { Check, Clock, AlertCircle, Crown, Sparkles, Zap, Shield, Globe, Share2, Star, Headphones } from "lucide-react";

const OfferSection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero garantir meu site premium por R$ 497,00. Vamos começar meu projeto exclusivo?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-28 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-80 h-80 bg-gradient-luxury rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-luxury rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-luxury rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Urgency Banner */}
          <div className="inline-flex items-center bg-card border border-destructive/30 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <AlertCircle className="w-4 h-4 text-destructive mr-2" />
            <span className="text-sm font-medium text-destructive">
              Oferta Exclusiva - Tempo Limitado
            </span>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h2 className="font-inter text-3xl lg:text-5xl font-bold mb-8 text-foreground">
              Tudo isso por apenas{" "}
              <span className="text-primary relative">
                R$ 497,00
                <div className="absolute -top-4 -right-4">
                  <Crown className="w-8 h-8 text-primary" />
                </div>
              </span>
            </h2>
            
            <p className="font-inter text-lg lg:text-xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
              Um investimento único para colocar seu negócio na internet com{" "}
              <span className="font-bold text-primary">
                profissionalismo, velocidade e sofisticação premium
              </span>
            </p>
          </div>

          {/* Luxury Offer Box */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-md mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - What's included */}
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Sparkles className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-inter text-2xl lg:text-3xl font-bold text-foreground">
                    Pacote Premium Incluso
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: Crown, text: "Site profissional ultra personalizado" },
                    { icon: Sparkles, text: "Design responsivo de luxo (mobile/desktop)" },
                    { icon: Globe, text: "Domínio premium (.com.br) por 1 ano" },
                    { icon: Shield, text: "Hospedagem de alta performance por 1 ano" },
                    { icon: Share2, text: "Integração completa redes sociais" },
                    { icon: Zap, text: "Botão WhatsApp inteligente integrado" },
                    { icon: Star, text: "Otimização avançada para Google SEO" },
                    { icon: Headphones, text: "Suporte técnico VIP por 60 dias" }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 group">
                        <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-inter text-foreground group-hover:text-primary transition-all duration-300">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right - Price & CTA */}
              <div className="text-center space-y-6">
                <div className="bg-primary rounded-2xl p-6 shadow-md">
                  <div className="text-primary-foreground/80 text-sm mb-2">Valor normal: R$ 1.497,00</div>
                  <div className="font-inter text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    R$ 497
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    Pagamento único • Sem mensalidades
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    variant="default" 
                    size="default" 
                    onClick={handleWhatsAppClick}
                    className="w-full font-inter text-sm px-6 py-3 h-auto"
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    Quero meu site premium agora!
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium">Entrega garantida em até 5 dias úteis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium">Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium">Satisfação garantida</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium">Suporte premium incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;