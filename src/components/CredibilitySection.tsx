import { Star, Users, Clock, Award, Trophy, Gem, Crown } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "200+",
    label: "Clientes Satisfeitos"
  },
  {
    icon: Clock,
    number: "5",
    label: "Dias de Entrega"
  },
  {
    icon: Trophy,
    number: "4.9",
    label: "Avaliação Média"
  },
  {
    icon: Award,
    number: "100%",
    label: "Projetos Entregues"
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    business: "Estúdio de Beleza Premium",
    text: "Meu site ficou absolutamente incrível! Em apenas 5 dias estava online e já estou recebendo clientes VIP. O investimento se pagou em uma semana.",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "João Santos",
    business: "Consultor Financeiro Executive", 
    text: "Profissionalismo de alto nível! O site transmite toda a credibilidade que eu precisava. Meus clientes ficaram impressionados com a qualidade.",
    rating: 5,
    avatar: "JS"
  },
  {
    name: "Ana Costa",
    business: "Boutique de Luxo",
    text: "Superou todas as minhas expectativas! O design é sofisticado e funciona perfeitamente. Recomendo para quem busca excelência!",
    rating: 5,
    avatar: "AC"
  }
];

const CredibilitySection = () => {
  return (
    <section className="py-28 bg-gradient-subtle relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-luxury rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-luxury rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-block bg-card border border-border rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-foreground">
              Resultados Comprovados
            </span>
          </div>

          <h2 className="font-inter text-3xl lg:text-5xl font-bold mb-8 text-foreground">
            Nossos números{" "}
            <span className="text-primary">
              falam por si só
            </span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group animate-fade-in-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="font-inter text-3xl lg:text-4xl font-bold text-primary mb-3">
                    {stat.number}
                  </div>
                  <div className="font-inter text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About */}
        <div className="text-center mb-20 max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center justify-center mb-8">
            <Crown className="w-6 h-6 text-primary mr-3" />
            <h3 className="font-inter text-2xl lg:text-3xl font-bold text-foreground">
              Sua presença digital em{" "}
              <span className="text-primary">
                mãos especialistas
              </span>
            </h3>
          </div>
          
          <p className="font-inter text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Nos últimos anos ajudamos diversos empreendedores, pequenos negócios e 
            profissionais liberais a conquistarem{" "}
            <span className="font-semibold text-foreground">presença digital de elite</span>{" "}
            de forma rápida e sofisticada. Nossa missão é entregar sites que{" "}
            <span className="font-bold text-primary">
              não apenas impressionam
            </span>, 
            mas que também{" "}
            <span className="font-bold text-primary">
              vendem e geram resultados extraordinários
            </span>.
          </p>
        </div>

        {/* Testimonials */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-card border border-border rounded-full px-4 py-2 mb-8">
              <Gem className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-foreground">
                Depoimentos Premium
              </span>
            </div>
            
            <h3 className="font-inter text-2xl lg:text-3xl font-bold text-foreground mb-4">
              O que nossos{" "}
              <span className="text-primary">
                clientes VIP
              </span>{" "}
              dizem
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  
                  <p className="font-inter text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-inter text-lg font-bold text-foreground">{testimonial.name}</div>
                      <div className="font-inter text-sm text-primary">{testimonial.business}</div>
                    </div>
                  </div>
                </div>

                {/* Star icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-primary rounded-full p-1">
                    <Star className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;