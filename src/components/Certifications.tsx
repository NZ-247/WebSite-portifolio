import React from "react";
import {Award, BookOpen, GraduationCap} from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  icon: React.ReactNode;
  category: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      icon: <Award size={28} />,
      category: "Redes",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      icon: <Award size={28} />,
      category: "Segurança",
    },
    {
      name: "Linux Professional Institute (LPIC-1)",
      issuer: "LPI",
      icon: <GraduationCap size={28} />,
      category: "Linux",
    },
    {
      name: "Cisco CCNA",
      issuer: "Cisco",
      icon: <Award size={28} />,
      category: "Redes",
    },
    {
      name: "VMware Certified Professional",
      issuer: "VMware",
      icon: <Award size={28} />,
      category: "Virtualização",
    },
    {
      name: "Microsoft Certified: Azure Administrator",
      issuer: "Microsoft",
      icon: <Award size={28} />,
      category: "Cloud",
    },
    {
      name: "Segurança da Informação (ISO 27001)",
      issuer: "Certificação Internacional",
      icon: <Award size={28} />,
      category: "Segurança",
    },
    {
      name: "Proxmox Certified Specialist",
      issuer: "Proxmox",
      icon: <BookOpen size={28} />,
      category: "Virtualização",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              Certificações e Estudos
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] mx-auto mb-6"></div>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            Formação contínua e certificações reconhecidas internacionalmente
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00D9FF]/20 to-[#0EA5E9]/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-[#00D9FF]">{cert.icon}</div>
              </div>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#00D9FF]/20 text-[#00D9FF] rounded-full mb-3">
                {cert.category}
              </span>

              {/* Certification Name */}
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00D9FF] transition-colors">
                {cert.name}
              </h3>

              {/* Issuer */}
              <p className="text-sm text-[#94A3B8]">{cert.issuer}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-[#1E293B]/50 to-[#1E293B]/30 backdrop-blur-sm border border-[#00D9FF]/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">8+</div>
              <p className="text-[#94A3B8]">Certificações Profissionais</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">4+</div>
              <p className="text-[#94A3B8]">Anos de Experiência</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00D9FF] mb-2">100+</div>
              <p className="text-[#94A3B8]">Horas de Treinamento Anual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
