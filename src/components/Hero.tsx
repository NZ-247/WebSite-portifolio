import React from "react";
import {ArrowRight, Download} from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D9FF]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/30 rounded-full">
            <span className="w-2 h-2 bg-[#00D9FF] rounded-full mr-2 animate-pulse"></span>
            <span className="text-[#00D9FF] text-sm font-medium">Consultoria e Soluções em Infraestrutura de T.I</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#F8FAFC]">Alan M. Lima</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              Analista e Consultor
            </span>
            <br />
            <span className="text-[#F8FAFC]">de Infraestrutura de T.I</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-3xl mx-auto mb-10 leading-relaxed">
            Especialista em infraestrutura de T.I, redes empresariais, virtualização, segurança da informação e automação de sistemas. 
            Soluções completas e personalizadas para empresas que buscam excelência tecnológica.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 hover:scale-105"
            >
              Solicitar Contato
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#00D9FF] text-[#00D9FF] font-semibold rounded-lg hover:bg-[#00D9FF]/10 transition-all duration-300"
            >
              Conheça meus Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: "10+", label: "Anos de Experiência" },
              { value: "50+", label: "Projetos Concluídos" },
              { value: "30+", label: "Clientes Satisfeitos" },
              { value: "24/7", label: "Suporte Disponível" },
            ].map((stat, index) => (
              <div key={index} className="bg-[#1E293B]/30 backdrop-blur-sm border border-[#00D9FF]/20 rounded-lg p-6 hover:border-[#00D9FF]/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#00D9FF] mb-2">{stat.value}</div>
                <div className="text-sm text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00D9FF]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00D9FF] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
