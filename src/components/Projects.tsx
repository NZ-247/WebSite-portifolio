import React from "react";
import {ExternalLink, Code} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Infraestrutura Corporativa Completa",
      description: "Implementação de infraestrutura de rede empresarial com servidores redundantes, sistema de backup automatizado e monitoramento 24/7 para empresa de médio porte.",
      technologies: ["Windows Server", "Active Directory", "Veeam", "Zabbix", "VPN"],
      category: "Infraestrutura",
    },
    {
      title: "Ambiente de Virtualização Empresarial",
      description: "Migração de servidores físicos para ambiente virtualizado com Proxmox, reduzindo custos operacionais em 40% e aumentando disponibilidade.",
      technologies: ["Proxmox", "LXC", "Docker", "Backup", "HA Cluster"],
      category: "Virtualização",
    },
    {
      title: "Rede Segmentada com VLANs",
      description: "Projeto de rede corporativa segmentada com VLANs, implementação de firewall pfSense e políticas de segurança avançadas para proteção de dados sensíveis.",
      technologies: ["VLANs", "pfSense", "MikroTik", "Firewall", "QoS"],
      category: "Redes",
    },
    {
      title: "Sistema de Monitoramento Integrado",
      description: "Implementação de solução completa de monitoramento com Zabbix e Grafana, incluindo alertas inteligentes e dashboards personalizados.",
      technologies: ["Zabbix", "Grafana", "SNMP", "APIs", "Automação"],
      category: "Monitoramento",
    },
    {
      title: "Migração para Cloud Híbrida",
      description: "Planejamento e execução de migração de serviços críticos para ambiente cloud híbrido, mantendo servidores locais para dados sensíveis.",
      technologies: ["AWS", "Azure", "VPN Site-to-Site", "Backup Cloud", "DNS"],
      category: "Cloud",
    },
    {
      title: "Automação de Backup e Disaster Recovery",
      description: "Desenvolvimento de estratégia completa de backup automatizado com testes regulares de disaster recovery, garantindo RPO de 4 horas.",
      technologies: ["Veeam", "Scripts", "Automação", "Storage", "Replicação"],
      category: "Backup",
    },
  ];

  const categories = ["Todos", "Infraestrutura", "Virtualização", "Redes", "Monitoramento", "Cloud", "Backup"];
  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              Projetos Realizados
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] mx-auto mb-6"></div>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            Soluções tecnológicas implementadas com sucesso para empresas de diversos segmentos
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] text-[#0A0E27] shadow-lg shadow-[#00D9FF]/50"
                  : "bg-[#1E293B]/50 text-[#94A3B8] border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 hover:text-[#00D9FF]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl overflow-hidden hover:border-[#00D9FF]/50 hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-[#00D9FF]/20">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-[#00D9FF]/20 text-[#00D9FF] rounded-full">
                    {project.category}
                  </span>
                  <Code className="text-[#00D9FF] opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00D9FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-[#0F172A] text-[#00D9FF] border border-[#00D9FF]/30 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#94A3B8] mb-6">Interessado em um projeto similar?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300"
          >
            Solicitar Orçamento
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
