import React from "react";
import {Quote, Star} from 'lucide-react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Mendes",
      position: "Diretor de T.I",
      company: "TechCorp Solutions",
      content: "Alan transformou completamente nossa infraestrutura de T.I. A migração para ambiente virtualizado foi impecável e os resultados superaram nossas expectativas. Profissional extremamente competente e confiável.",
      rating: 5,
    },
    {
      name: "Mariana Silva",
      position: "CEO",
      company: "Inovação Digital",
      content: "Trabalhar com o Alan foi uma experiência excepcional. Ele não apenas resolveu nossos problemas técnicos, mas também nos orientou estrategicamente sobre as melhores práticas de segurança e backup.",
      rating: 5,
    },
    {
      name: "Roberto Oliveira",
      position: "Gerente de Operações",
      company: "LogiTech Sistemas",
      content: "A implementação do sistema de monitoramento foi crucial para nossa operação. Agora temos visibilidade total da infraestrutura e conseguimos antecipar problemas. Recomendo fortemente!",
      rating: 5,
    },
    {
      name: "Fernanda Costa",
      position: "CTO",
      company: "CloudBiz Enterprise",
      content: "Alan demonstrou profundo conhecimento técnico em todas as etapas do projeto de migração cloud. Sua abordagem metodológica e atenção aos detalhes garantiram zero downtime durante a transição.",
      rating: 5,
    },
    {
      name: "Paulo Santos",
      position: "Diretor Financeiro",
      company: "Fintech Innovations",
      content: "A consultoria em segurança da informação foi fundamental para nossa certificação. Alan nos ajudou a implementar todas as políticas necessárias e garantir compliance com as normas do setor.",
      rating: 5,
    },
    {
      name: "Juliana Almeida",
      position: "Gerente de T.I",
      company: "Retail Plus",
      content: "Suporte excepcional e sempre disponível. Alan não é apenas um prestador de serviços, é um verdadeiro parceiro tecnológico que entende as necessidades do negócio.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              O Que Dizem Meus Clientes
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] mx-auto mb-6"></div>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            Feedback de empresas que confiaram em meus serviços de consultoria e infraestrutura de T.I
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="text-[#00D9FF] opacity-50" size={32} />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#00D9FF] fill-[#00D9FF]" size={16} />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-[#94A3B8] leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-[#00D9FF]/20 pt-4">
                <h4 className="text-[#F8FAFC] font-bold mb-1">{testimonial.name}</h4>
                <p className="text-sm text-[#00D9FF]">{testimonial.position}</p>
                <p className="text-sm text-[#94A3B8]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "98%", label: "Taxa de Satisfação" },
            { value: "30+", label: "Clientes Ativos" },
            { value: "50+", label: "Projetos Concluídos" },
            { value: "24/7", label: "Suporte Disponível" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#1E293B]/30 backdrop-blur-sm border border-[#00D9FF]/20 rounded-lg p-6 text-center hover:border-[#00D9FF]/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00D9FF] mb-2">{stat.value}</div>
              <div className="text-sm text-[#94A3B8]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
