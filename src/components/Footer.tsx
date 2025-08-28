import { MessageCircle, Mail, Globe, Crown, Sparkles, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre a criação de sites premium.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gradient-dark py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-luxury rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-luxury rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-luxury rounded-2xl flex items-center justify-center">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-foreground">
                Sites{" "}
                <span className="bg-gradient-luxury bg-clip-text text-transparent">
                  Premium
                </span>
              </h3>
            </div>
            
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Transformamos ideias em sites profissionais de{" "}
              <span className="font-semibold text-foreground">alta qualidade</span>{" "}
              que geram resultados extraordinários. Sua presença digital em{" "}
              <span className="font-semibold bg-gradient-luxury bg-clip-text text-transparent">
                mãos especialistas
              </span>.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center group hover:scale-110 transition-bounce">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center group hover:scale-110 transition-bounce">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center group hover:scale-110 transition-bounce">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-playfair text-2xl font-bold text-foreground flex items-center">
              <Sparkles className="w-6 h-6 text-primary mr-2" />
              Nossos Serviços Premium
            </h4>
            <ul className="space-y-4 font-inter text-lg text-muted-foreground">
              <li className="flex items-center space-x-3 hover:text-foreground transition-luxury cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>• Landing Pages de Alto Impacto</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-foreground transition-luxury cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>• Sites Institucionais Premium</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-foreground transition-luxury cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>• Sites para Profissionais Liberais</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-foreground transition-luxury cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>• E-commerce Sofisticado</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-foreground transition-luxury cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>• Manutenção e Suporte VIP</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-foreground transition-luxury cursor-pointer">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>• Consultoria Digital Estratégica</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-playfair text-2xl font-bold text-foreground flex items-center">
              <MessageCircle className="w-6 h-6 text-primary mr-2" />
              Contato Premium
            </h4>
            
            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-4 text-muted-foreground hover:text-foreground transition-luxury group w-full text-left"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-inter text-lg font-semibold">(11) 99999-9999</div>
                  <div className="font-inter text-sm text-primary">WhatsApp Premium</div>
                </div>
              </button>
              
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-inter text-lg">contato@sitespremium.com</div>
                  <div className="font-inter text-sm text-primary">E-mail Corporativo</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-6 shadow-elegant">
              <h5 className="font-playfair text-lg font-bold text-foreground mb-3">
                ⏰ Horário de Atendimento VIP
              </h5>
              <p className="font-inter text-sm text-muted-foreground">
                <strong>Segunda a Sexta:</strong> 9h às 20h<br />
                <strong>Sábados:</strong> 9h às 14h<br />
                <span className="text-primary font-semibold">Resposta garantida em até 2h</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="font-inter text-muted-foreground text-center md:text-left">
              © {currentYear} Sites Premium. Todos os direitos reservados.<br />
              <span className="text-primary font-semibold">Desenvolvido com excelência para transformar negócios</span>
            </p>
            
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-inter text-sm text-muted-foreground ml-2">
                4.9/5 - Clientes Satisfeitos
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;