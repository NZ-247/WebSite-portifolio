import React from "react";
import {Linkedin, Github, Mail, ArrowUp} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { name: "Início", href: "#home" },
        { name: "Sobre", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Projetos", href: "#projects" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { name: "Infraestrutura", href: "#services" },
        { name: "Virtualização", href: "#services" },
        { name: "Segurança", href: "#services" },
        { name: "Consultoria", href: "#services" },
      ],
    },
    {
      title: "Contato",
      links: [
        { name: "E-mail", href: "mailto:alan@services.net.br" },
        { name: "LinkedIn", href: "https://linkedin.com/in/alan-m-lima" },
        { name: "GitHub", href: "https://github.com/NZ-247" },
        { name: "Telefone", href: "tel:+5566999064658" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/alan-m-lima", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/NZ-247", label: "GitHub" },
    { icon: <Mail size={20} />, href: "mailto:alan@services.nt.br", label: "E-mail" },
  ];

  return (
    <footer className="bg-[#0F172A] border-t border-[#00D9FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#00D9FF] mb-4">Alan M. Lima</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-4">
              Analista e Consultor de Infraestrutura de T.I especializado em soluções completas para empresas.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-[#1E293B] border border-[#00D9FF]/30 rounded-lg text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A0E27] transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-[#F8FAFC] font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      className="text-[#94A3B8] hover:text-[#00D9FF] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00D9FF]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-[#94A3B8] text-sm text-center md:text-left">
              © {currentYear} Alan M. Lima Todos os direitos reservados.
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-[#1E293B] border border-[#00D9FF]/30 text-[#00D9FF] rounded-lg hover:bg-[#00D9FF] hover:text-[#0A0E27] transition-all duration-300 group"
            >
              Voltar ao Topo
              <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
