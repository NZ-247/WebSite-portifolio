import React, { useState, useEffect, useRef } from "react";
import {Server, Network, Shield, Cloud, Monitor, Database, Container} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills: Skill[] = [
    {
      name: "Infraestrutura de T.I",
      level: 95,
      icon: <Server size={28} />,
      color: "#00D9FF",
    },
    {
      name: "Redes e Protocolos (TCP/IP, VLANs, VPNs)",
      level: 98,
      icon: <Network size={28} />,
      color: "#0EA5E9",
    },
    {
      name: "Servidores Linux e Windows",
      level: 98,
      icon: <Database size={28} />,
      color: "#00D9FF",
    },
    {
      name: "Virtualização (Proxmox, VMware, Hyper-V)",
      level: 98,
      icon: <Container size={28} />,
      color: "#0EA5E9",
    },
    {
      name: "Segurança da Informação e Backup",
      level: 96,
      icon: <Shield size={28} />,
      color: "#00D9FF",
    },
    {
      name: "Monitoramento (Zabbix, Grafana)",
      level: 95,
      icon: <Monitor size={28} />,
      color: "#0EA5E9",
    },
    {
      name: "Cloud e Domínios (DNS, E-mail, Firewall)",
      level: 97,
      icon: <Cloud size={28} />,
      color: "#00D9FF",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#0A0E27]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              Habilidades Técnicas
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] mx-auto mb-6"></div>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            Expertise técnica abrangente em todas as áreas críticas de infraestrutura de T.I
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex-shrink-0 p-3 rounded-lg"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <div style={{ color: skill.color }}>{skill.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">{skill.name}</h3>
                  <span className="text-sm text-[#94A3B8]">{skill.level}% Proficiência</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-[#0F172A] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                    boxShadow: `0 0 10px ${skill.color}80`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#F8FAFC] mb-8">Tecnologias e Ferramentas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "MikroTik",
              "Cisco",
              "Proxmox",
              "VMware",
              "Hyper-V",
              "Docker",
              "LXC",
              "Zabbix",
              "Grafana",
              "Linux",
              "Windows Server",
              "Active Directory",
              "Frontent",
              "Backend",
              "Web",
              "DNS",
              "DHCP",
              "VPN",
              "Firewall",
              "Backup",
              "Veeam",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1E293B]/50 border border-[#00D9FF]/30 text-[#00D9FF] rounded-lg hover:bg-[#00D9FF]/10 hover:border-[#00D9FF]/50 transition-all duration-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
