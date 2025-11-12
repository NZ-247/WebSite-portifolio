# Portfólio de Alan M. Lima

**Description**: Site profissional e responsivo para portfólio e apresentação de serviços de consultoria e assessoria em T.I. O site apresenta habilidades técnicas, projetos realizados, certificações, serviços oferecidos e formas de contato para empresas que buscam soluções completas em tecnologia.

**Tech Stack**: React + TypeScript + Vite + Tailwind CSS | Backend: N/A | Auth: N/A

## User Preferences

- **Language**: pt-BR (Português do Brasil)
- **Code Style**: Componentes funcionais React com TypeScript, código limpo e semântico
- **Design System**: Dark theme moderno com tons de azul-marinho, ciano e azul neon. Tipografia Inter. Animações suaves e efeitos hover.

### Styling

- **Paleta de cores**:
  - Background principal: `#0A0E27` (azul-marinho escuro)
  - Background secundário: `#0F172A` (cinza-azulado)
  - Acentos primários: `#00D9FF` (ciano neon)
  - Acentos secundários: `#0EA5E9` (azul tecnológico)
  - Texto principal: `#F8FAFC` (branco suave)
  - Texto secundário: `#94A3B8` (cinza claro)

- **Tipografia**: Inter (Google Fonts) - sans-serif moderno
- **Animações**: Fade-in, slide-up, hover effects, progress bar animations, scroll reveal
- **Layout**: Mobile-first, totalmente responsivo (desktop, tablet, mobile)

## Directory Structure

- `/src`: Frontend code
  - `/components`: Componentes React (Navbar, Hero, About, Skills, Projects, Services, Certifications, Testimonials, Contact, Footer)
  - `App.tsx`: Componente principal da aplicação
  - `main.tsx`: Entry point
  - `index.css`: Estilos globais com Tailwind
- `/public`: Assets estáticos
- `index.html`: HTML principal com meta tags SEO

## Current Features

### Implemented

1. **Navbar Responsivo**: Menu fixo com scroll suave, menu mobile hamburger, transições suaves - Key files: `src/components/Navbar.tsx`

2. **Hero Section**: Apresentação profissional com nome, título, descrição, CTAs (Solicitar Contato / Conheça meus Serviços), estatísticas (10+ anos, 50+ projetos, 30+ clientes, 24/7 suporte), background animado com gradientes, scroll indicator - Key files: `src/components/Hero.tsx`

3. **Seção Sobre Mim**: Biografia profissional, highlights com ícones (Experiência Sólida, Foco em Resultados, Tecnologia de Ponta, Segurança Garantida), CTA para contato - Key files: `src/components/About.tsx`

4. **Seção de Habilidades**: 7 skills principais com barras de progresso animadas, ícones customizados, badges de tecnologias (MikroTik, Cisco, Proxmox, VMware, Docker, Zabbix, etc.), scroll reveal animation - Key files: `src/components/Skills.tsx`

5. **Galeria de Projetos**: 6 projetos com cards animados, filtro por categoria (Todos, Infraestrutura, Virtualização, Redes, Monitoramento, Cloud, Backup), descrições detalhadas, tecnologias utilizadas - Key files: `src/components/Projects.tsx`

6. **Serviços Oferecidos**: 8 serviços em cards (Implementação de Servidores, Infraestrutura de Redes, Virtualização e Cloud, Segurança da Informação, Backup e Disaster Recovery, Monitoramento 24/7, Automação de Sistemas, Suporte e Consultoria), features list, CTA para consulta gratuita - Key files: `src/components/Services.tsx`

7. **Certificações e Estudos**: 8 certificações profissionais (CompTIA Network+, CompTIA Security+, LPIC-1, CCNA, VMware, Azure, ISO 27001, Proxmox), badges com categorias, estatísticas (8+ certificações, 10+ anos experiência, 100+ horas treinamento anual) - Key files: `src/components/Certifications.tsx`

8. **Depoimentos de Clientes**: 6 testimonials com avaliação 5 estrelas, nome, cargo, empresa, feedback detalhado, estatísticas de satisfação (98% satisfação, 30+ clientes ativos, 50+ projetos, 24/7 suporte) - Key files: `src/components/Testimonials.tsx`

9. **Formulário de Contato**: Formulário funcional com validação (nome, e-mail, mensagem), toast notifications, informações de contato (e-mail, telefone, localização), links para redes sociais (LinkedIn, GitHub, E-mail), indicador de disponibilidade - Key files: `src/components/Contact.tsx`

10. **Footer Completo**: Links de navegação organizados, links sociais, copyright, botão "Voltar ao Topo" - Key files: `src/components/Footer.tsx`

11. **SEO Otimizado**: Meta tags no index.html (title, description), estrutura semântica HTML5, heading hierarchy

12. **Design Responsivo**: Mobile-first approach, breakpoints para tablet e desktop, menu mobile funcional

### Known Limitations

- Formulário de contato simula envio (não integrado com backend real para envio de e-mails)
- Links sociais e de contato são exemplos (precisam ser substituídos por dados reais do cliente)
- Imagens de projetos não incluídas (usando cards com descrições textuais)

## Database Schema

**Type**: N/A (Site estático sem banco de dados)

## Deno Functions

N/A (Nenhuma função Deno implementada neste projeto)

## API Endpoints

N/A (Nenhuma API externa integrada)

**External Integrations**: 
- Google Fonts (Inter font family)
- Lucide React (ícones)
- React Hot Toast (notificações)

**Lumi SDK Tools Used**: Nenhum (projeto frontend estático)

## Improvement Opportunities

### High Priority

- [ ] **Integração de E-mail Real**: Implementar backend para envio real de e-mails do formulário de contato (Lumi SDK Email Tool ou serviço externo como SendGrid/Resend)
- [ ] **Adicionar Imagens de Projetos**: Incluir screenshots ou imagens representativas dos projetos realizados
- [ ] **Analytics**: Adicionar Google Analytics ou similar para tracking de visitantes

### Medium Priority

- [ ] **Blog/Artigos**: Adicionar seção de blog com artigos técnicos sobre infraestrutura de T.I
- [ ] **Modo Claro**: Implementar theme switcher para alternar entre dark/light mode
- [ ] **Animações Avançadas**: Adicionar parallax scrolling e animações mais elaboradas com Framer Motion
- [ ] **Multilíngua**: Suporte para inglês além do português

### Low Priority / Future Enhancements

- [ ] **Calculadora de Orçamento**: Ferramenta interativa para estimar custos de projetos
- [ ] **Chat ao Vivo**: Widget de chat para suporte em tempo real
- [ ] **Galeria de Certificados**: Imagens dos certificados profissionais
- [ ] **Vídeo Apresentação**: Vídeo de apresentação profissional na hero section
