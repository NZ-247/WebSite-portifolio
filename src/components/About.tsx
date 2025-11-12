import React from "react";
import {Award, Target, Zap, Shield} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award size={32} />,
      title: "Experiência Sólida",
      description: "Mais de 10 anos atuando em infraestrutura de T.I em empresas de diversos segmentos",
    },
    {
      icon: <Target size={32} />,
      title: "Foco em Resultados",
      description: "Soluções práticas e eficientes que geram valor real para o negócio",
    },
    {
      icon: <Zap size={32} />,
      title: "Tecnologia de Ponta",
      description: "Atualização constante com as melhores práticas e ferramentas do mercado",
    },
    {
      icon: <Shield size={32} />,
      title: "Segurança Garantida",
      description: "Proteção de dados e sistemas com as mais rigorosas normas de segurança",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              Sobre Mim
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC]">
              Especialista em Infraestrutura de T.I com Foco em Excelência
            </h3>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Sou Alan Maciel Lima, Analista e Consultor de Infraestrutura de T.I com mais de 10 anos de experiência 
              no mercado. Minha trajetória profissional é marcada pela busca constante por soluções tecnológicas 
              que realmente fazem a diferença no dia a dia das empresas.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Especializado em <span className="text-[#00D9FF] font-semibold">infraestrutura de redes</span>, 
              <span className="text-[#00D9FF] font-semibold"> servidores Linux e Windows</span>, 
              <span className="text-[#00D9FF] font-semibold"> virtualização</span>, 
              <span className="text-[#00D9FF] font-semibold"> automação de sistemas</span> e 
              <span className="text-[#00D9FF] font-semibold"> segurança da informação</span>, 
              atuo no planejamento, implementação e gerenciamento de ambientes tecnológicos complexos.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Meu compromisso é entregar soluções robustas, escaláveis e seguras, sempre alinhadas aos objetivos 
              estratégicos do negócio. Credibilidade técnica, transparência e foco em resultados são os pilares 
              do meu trabalho.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300"
              >
                Vamos Conversar
              </a>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 group"
              >
                <div className="text-[#00D9FF] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">{item.title}</h4>
                <p className="text-[#94A3B8] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
