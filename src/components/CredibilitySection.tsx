import { Star, Users, Clock, Award, Trophy, Gem, Crown } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "200+",
    label: "Clientes Satisfeitos",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Clock,
    number: "5",
    label: "Dias de Entrega",
    gradient: "from-green-400 to-teal-500"
  },
  {
    icon: Trophy,
    number: "4.9",
    label: "Avaliação Média",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Award,
    number: "100%",
    label: "Projetos Entregues",
    gradient: "from-purple-400 to-pink-500"
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
          <div className="inline-block bg-gradient-card border border-primary/30 rounded-full px-6 py-3 shadow-luxury mb-8">
            <span className="text-sm font-medium bg-gradient-luxury bg-clip-text text-transparent">
              📊 Resultados Comprovados
            </span>
          </div>

          <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-8 text-foreground">
            Nossos números{" "}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
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
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce shadow-luxury`}>
                    <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                  </div>
                  <div className="font-playfair text-4xl lg:text-5xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="font-inter text-muted-foreground text-lg">
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
            <Crown className="w-8 h-8 text-primary mr-3" />
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
              Sua presença digital em{" "}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                mãos especialistas
              </span>
            </h3>
          </div>
          
          <p className="font-inter text-xl lg:text-2xl text-muted-foreground leading-relaxed">
            Nos últimos anos ajudamos diversos empreendedores, pequenos negócios e 
            profissionais liberais a conquistarem{" "}
            <span className="font-semibold text-foreground">presença digital de elite</span>{" "}
            de forma rápida e sofisticada. Nossa missão é entregar sites que{" "}
            <span className="font-bold bg-gradient-luxury bg-clip-text text-transparent">
              não apenas impressionam
            </span>, 
            mas que também{" "}
            <span className="font-bold bg-gradient-luxury bg-clip-text text-transparent">
              vendem e geram resultados extraordinários
            </span>.
          </p>
        </div>

        {/* Testimonials */}
        <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-card border border-primary/30 rounded-full px-6 py-3 shadow-luxury mb-8">
              <Gem className="w-5 h-5 text-primary mr-2" />
              <span className="text-sm font-medium bg-gradient-luxury bg-clip-text text-transparent">
                💎 Depoimentos Premium
              </span>
            </div>
            
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O que nossos{" "}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                clientes VIP
              </span>{" "}
              dizem
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-gradient-card border border-primary/20 p-8 rounded-3xl shadow-elegant hover:shadow-luxury transition-luxury hover:-translate-y-2 relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-luxury">
                  <div className="absolute inset-0 bg-gradient-luxury opacity-5 animate-shimmer"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="font-inter text-muted-foreground mb-8 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-playfair text-xl font-bold text-foreground">{testimonial.name}</div>
                      <div className="font-inter text-sm text-primary">{testimonial.business}</div>
                    </div>
                  </div>
                </div>

                {/* Premium badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-luxury">
                  <div className="bg-gradient-luxury rounded-full p-2">
                    <Star className="w-4 h-4 text-white" />
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