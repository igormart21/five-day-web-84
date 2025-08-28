import { Check, Zap, Smartphone, Share2, Globe, Headphones, Crown, Shield } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Layout Exclusivo de Luxo",
    description: "Design personalizado e sofisticado, criado especialmente para destacar seu negócio da concorrência."
  },
  {
    icon: Zap,
    title: "Entrega Express em 5 Dias",
    description: "Velocidade profissional sem comprometer a qualidade. Seu site online rapidamente."
  },
  {
    icon: Smartphone,
    title: "Design Ultra Responsivo",
    description: "Experiência perfeita em qualquer dispositivo: celular, tablet, desktop e smart TVs."
  },
  {
    icon: Share2,
    title: "Integração Completa Premium",
    description: "Conecte suas redes sociais, WhatsApp, Google Analytics e ferramentas de marketing."
  },
  {
    icon: Globe,
    title: "Domínio e Hospedagem Premium",
    description: "Infraestrutura de alta performance com SSL gratuito e backup automático inclusos."
  },
  {
    icon: Shield,
    title: "Suporte Técnico VIP",
    description: "Acompanhamento especializado durante todo o processo e suporte prioritário."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-28 bg-gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-luxury rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-luxury rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block bg-card border border-border rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-foreground">
              Diferenciais Premium
            </span>
          </div>
          
          <h2 className="font-inter text-3xl lg:text-5xl font-bold mb-8 text-foreground">
            Por que escolher nosso{" "}
            <span className="text-primary">
              serviço premium?
            </span>
          </h2>
          
          <p className="font-inter text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Oferecemos uma solução completa de{" "}
            <span className="font-semibold text-foreground">alta qualidade</span>{" "}
            para colocar seu negócio online com{" "}
            <span className="font-semibold text-primary">
              profissionalismo e sofisticação
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-inter text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Check icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-primary rounded-full p-1">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <p className="font-inter text-lg text-muted-foreground mb-6">
            Mais de <span className="font-bold text-primary">200+ clientes</span> já transformaram seus negócios conosco
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-primary rounded-full opacity-60" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;