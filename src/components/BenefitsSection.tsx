import { Check, Zap, Smartphone, Share2, Globe, Headphones, Crown, Shield } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Layout Exclusivo de Luxo",
    description: "Design personalizado e sofisticado, criado especialmente para destacar seu negócio da concorrência.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Zap,
    title: "Entrega Express em 5 Dias",
    description: "Velocidade profissional sem comprometer a qualidade. Seu site online rapidamente.",
    gradient: "from-blue-400 to-purple-500"
  },
  {
    icon: Smartphone,
    title: "Design Ultra Responsivo",
    description: "Experiência perfeita em qualquer dispositivo: celular, tablet, desktop e smart TVs.",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: Share2,
    title: "Integração Completa Premium",
    description: "Conecte suas redes sociais, WhatsApp, Google Analytics e ferramentas de marketing.",
    gradient: "from-pink-400 to-red-500"
  },
  {
    icon: Globe,
    title: "Domínio e Hospedagem Premium",
    description: "Infraestrutura de alta performance com SSL gratuito e backup automático inclusos.",
    gradient: "from-indigo-400 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Suporte Técnico VIP",
    description: "Acompanhamento especializado durante todo o processo e suporte prioritário.",
    gradient: "from-purple-400 to-pink-500"
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
          <div className="inline-block bg-gradient-card border border-primary/30 rounded-full px-6 py-3 shadow-luxury mb-8">
            <span className="text-sm font-medium bg-gradient-luxury bg-clip-text text-transparent">
              ✨ Diferenciais Premium
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8 text-foreground">
            Por que escolher nosso{" "}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              serviço premium?
            </span>
          </h2>
          
          <p className="font-inter text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Oferecemos uma solução completa de{" "}
            <span className="font-semibold text-foreground">alta qualidade</span>{" "}
            para colocar seu negócio online com{" "}
            <span className="font-semibold bg-gradient-luxury bg-clip-text text-transparent">
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
                className="group p-8 rounded-3xl bg-gradient-card border border-primary/20 hover:border-primary/40 shadow-elegant hover:shadow-luxury transition-luxury hover:-translate-y-2 animate-fade-in-up relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-luxury">
                  <div className="absolute inset-0 bg-gradient-luxury opacity-5 animate-shimmer"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce shadow-luxury`}>
                        <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="font-playfair text-2xl font-bold text-foreground group-hover:bg-gradient-luxury group-hover:bg-clip-text group-hover:text-transparent transition-luxury">
                        {benefit.title}
                      </h3>
                      <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Premium badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-luxury">
                    <div className="bg-gradient-luxury rounded-full p-2">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <p className="font-inter text-lg text-muted-foreground mb-8">
            Mais de <span className="font-bold text-primary">200+ clientes</span> já transformaram seus negócios conosco
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gradient-luxury rounded-full opacity-60 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;