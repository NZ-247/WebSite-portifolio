import React from "react";
import {Server, Network, Shield, Cloud, HardDrive, Activity, Settings, Users} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <Server size={36} />,
      title: "Implementação de Servidores",
      description: "Configuração e implementação de servidores Linux e Windows para ambientes corporativos.",
      features: [
        "Instalação e configuração de servidores",
        "Active Directory e gerenciamento de usuários",
        "Serviços de arquivos e impressão",
        "Otimização de performance",
      ],
    },
    {
      icon: <Network size={36} />,
      title: "Infraestrutura de Redes",
      description: "Projeto, implementação e gerenciamento de redes empresariais completas.",
      features: [
        "Design de topologia de rede",
        "Configuração de switches e roteadores",
        "VLANs e segmentação de rede",
        "VPN e acesso remoto seguro",
      ],
    },
    {
      icon: <Cloud size={36} />,
      title: "Virtualização e Cloud",
      description: "Soluções de virtualização e migração para ambientes cloud híbridos.",
      features: [
        "Implementação Proxmox/VMware/Hyper-V",
        "Migração de servidores físicos para virtuais",
        "Containers Docker e LXC",
        "Integração com cloud pública",
      ],
    },
    {
      icon: <Shield size={36} />,
      title: "Segurança da Informação",
      description: "Proteção abrangente de dados e sistemas contra ameaças e vulnerabilidades.",
      features: [
        "Implementação de firewalls e IDS/IPS",
        "Políticas de segurança e compliance",
        "Auditoria de segurança",
        "Gestão de patches e atualizações",
      ],
    },
    {
      icon: <HardDrive size={36} />,
      title: "Backup e Disaster Recovery",
      description: "Estratégias completas de backup e recuperação de desastres.",
      features: [
        "Backup automatizado e incremental",
        "Testes de recuperação periódicos",
        "Replicação de dados",
        "Plano de continuidade de negócios",
      ],
    },
    {
      icon: <Activity size={36} />,
      title: "Monitoramento 24/7",
      description: "Monitoramento contínuo de infraestrutura com alertas inteligentes.",
      features: [
        "Implementação Zabbix/Grafana",
        "Dashboards personalizados",
        "Alertas proativos",
        "Relatórios de performance",
      ],
    },
    {
      icon: <Settings size={36} />,
      title: "Automação de Sistemas",
      description: "Automação de tarefas repetitivas e processos de infraestrutura.",
      features: [
        "Scripts de automação personalizados",
        "Provisionamento automatizado",
        "Integração de sistemas",
        "Otimização de workflows",
      ],
    },
    {
      icon: <Users size={36} />,
      title: "Suporte e Consultoria",
      description: "Suporte técnico especializado e consultoria estratégica em T.I.",
      features: [
        "Suporte remoto e presencial",
        "Consultoria em projetos de T.I",
        "Treinamento de equipes",
        "Documentação técnica",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-[#0F172A] to-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              Serviços Oferecidos
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] mx-auto mb-6"></div>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            Soluções completas em infraestrutura de T.I para empresas que buscam excelência tecnológica
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00D9FF]/20 to-[#0EA5E9]/20 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-[#00D9FF]">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00D9FF] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                    <span className="text-[#00D9FF] mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#1E293B]/50 to-[#1E293B]/30 backdrop-blur-sm border border-[#00D9FF]/20 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
            Precisa de uma Solução Personalizada?
          </h3>
          <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato para discutir como posso ajudar sua empresa a alcançar seus objetivos tecnológicos
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300"
          >
            Solicitar Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
