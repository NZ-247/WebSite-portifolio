import React, { useState } from "react";
import {Mail, Phone, Linkedin, Github, MapPin, Send} from 'lucide-react';
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    setIsSubmitting(true);

    // Simular envio de e-mail (substituir por integração real)
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entrarei em contato em breve.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "E-mail",
      value: "alan.franca@email.com",
      href: "mailto:alan.franca@email.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Telefone",
      value: "+55 (11) 98765-4321",
      href: "tel:+5511987654321",
    },
    {
      icon: <MapPin size={24} />,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alanfranca",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/alanfranca",
    },
    {
      icon: <Mail size={24} />,
      label: "E-mail",
      href: "mailto:alan.franca@email.com",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#0F172A]">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]">
              Entre em Contato
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] mx-auto mb-6"></div>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto">
            Vamos conversar sobre como posso ajudar sua empresa a alcançar seus objetivos tecnológicos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-[#F8FAFC] font-medium mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0F172A] border border-[#00D9FF]/30 rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Seu nome"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-[#F8FAFC] font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0F172A] border border-[#00D9FF]/30 rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="seu.email@empresa.com"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-[#F8FAFC] font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0F172A] border border-[#00D9FF]/30 rounded-lg text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                  placeholder="Descreva seu projeto ou necessidade..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9] text-[#0A0E27] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-[#00D9FF]/20 rounded-lg text-[#00D9FF]">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-sm mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#F8FAFC] font-medium hover:text-[#00D9FF] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#F8FAFC] font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-[#00D9FF]/20 rounded-lg text-[#00D9FF] hover:bg-[#00D9FF] hover:text-[#0A0E27] transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-[#1E293B]/50 to-[#1E293B]/30 backdrop-blur-sm border border-[#00D9FF]/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-4">Disponibilidade</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                Atualmente aceitando novos projetos e consultorias. Respondo todas as mensagens em até 24 horas.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 font-medium">Disponível para novos projetos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
