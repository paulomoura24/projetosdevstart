# 🌍 TripMe - Agência de Viagens

Uma landing page moderna, responsiva e interativa para agência de viagens, desenvolvida com **HTML5 semântico**, **CSS3 avançado** e **JavaScript**, com foco em **acessibilidade**, **experiência do usuário** e **performance**.

---

## 📋 Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Requisitos](#requisitos)
- [Como Usar](#como-usar)
- [Acessibilidade](#acessibilidade)
- [Semântica HTML](#semântica-html)
- [Guia de Estilos](#guia-de-estilos)
- [Navegação](#navegação)
- [Melhorias Futuras](#melhorias-futuras)
- [Screenshots](#screenshots)
- [Contribuições](#contribuições)
- [Licença](#licença)
- [Autor](#autor)

---

## 📖 Sobre

A **TripMe** é uma landing page criada para uma agência de viagens que oferece roteiros personalizados pela Europa, incluindo opções culturais, gastronômicas e de aventura. O projeto combina design moderno com interatividade avançada, seguindo rigorosamente as normas de semântica HTML, acessibilidade web e melhores práticas de desenvolvimento.

### Objetivo

Apresentar os serviços da agência de forma clara, atrativa e interativa, com navegação intuitiva, interfaces responsivas e elementos dinâmicos que melhoram a experiência do usuário.

---

## ✨ Funcionalidades

- ✅ **Banner com Imagem de Fundo**: Seção hero com overlay de texto e gradientes
- ✅ **Navegação Responsiva**: Menu com hamburger animado para mobile
- ✅ **Cards Interativos de Roteiros**: Três opções de viagem com imagens e modais detalhados:
  - 🏛️ Roteiro Cultural (Cabril) - Modal com informações completas
  - 🍽️ Roteiro Gastronômico - Destaque com gradiente especial
  - 🏔️ Roteiro de Aventura (Piz Bernina) - Modal com detalhes técnicos
- ✅ **Formulário de Contato**: Formulário funcional com validação e feedback
- ✅ **Seção "Nos Encontre"**: Informações de contato com endereço, telefone e horário
- ✅ **Conselhos**: Recomendações práticas com ícones Font Awesome
- ✅ **Botões "Voltar ao Topo"**: Botões com ícones animados em cada seção
- ✅ **Efeitos Interativos Avançados**: Hover, animações de entrada, transições suaves
- ✅ **Design Totalmente Responsivo**: Layout adaptável com CSS Grid e Flexbox
- ✅ **Lazy Loading**: Otimização de imagens para melhor performance
- ✅ **Animações de Scroll**: Elementos que aparecem suavemente ao rolar
- ✅ **Modais Dinâmicos**: Pop-ups com detalhes dos roteiros
- ✅ **Feedback Visual**: Estados de loading e mensagens de sucesso/erro

---

## 🛠️ Tecnologias

- **HTML5** - Semântica moderna e acessível
- **CSS3** - Gradientes, animações, Grid, Flexbox e responsividade
- **JavaScript (ES6+)** - Interatividade, modais, formulários e animações
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Tipografia Montserrat
- **Intersection Observer API** - Animações de scroll performáticas

---

## 📁 Estrutura do Projeto

```
agencia-de-viagens/
├── index.html              # Página principal com estrutura semântica
├── style.css               # Estilos avançados e responsividade
├── script.js               # JavaScript para interatividade
├── README.md               # Este arquivo
└── images/
    ├── Cabril.jpg          # Imagem - Roteiro Cultural
    ├── Gastronomia.webp    # Imagem - Roteiro Gastronômico
    └── PizBermina.jpg      # Imagem - Roteiro de Aventura
```

---

## 📦 Requisitos

Não há dependências externas pesadas. O projeto utiliza CDNs para Font Awesome e Google Fonts.

### Versão Mínima de Browser

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Recursos Necessários

- JavaScript habilitado
- Suporte a CSS Grid e Flexbox
- Intersection Observer API (suportada em navegadores modernos)

---

## 🚀 Como Usar

### 1. Clonar ou Baixar o Projeto

```bash
git clone https://github.com/paulomoura24/projetosdevstart.git
cd agencia-de-viagens
```

### 2. Abrir no Navegador

Simplesmente abra o arquivo `index.html` no navegador:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 3. Ou Usar um Servidor Local

Para melhor experiência e evitar problemas de CORS:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js
npx http-server

# No VS Code use a extensão Live Server
abra o arquivo index.html com o Open With Live Server.
```

Depois acesse `http://localhost:8000` no navegador.

---

## ♿ Acessibilidade

O projeto segue as diretrizes **WCAG 2.1 Nível AA** e inclui:

### Atributos ARIA

- `aria-label` em botões e regiões navegáveis
- `aria-expanded` no menu hamburger
- `aria-hidden="true"` em ícones decorativos
- `role="img"` na seção banner

### Textos Alternativos

- Todos os `<img>` possuem `alt` descritivo
- Ícones Font Awesome possuem contexto adequado

### Navegação por Teclado

- Todos os botões e links são acessíveis via `Tab`
- Estados `:focus` claramente visíveis (contorno azul pontilhado)
- Navegação interna suave com `scroll-behavior: smooth`

### Contraste de Cores

- Texto com contraste mínimo de 4.5:1
- Links destacados com mudança de cor no hover
- Indicadores visuais claros em elementos interativos

### Outros Recursos

- Estrutura semântica clara
- Formulário com labels associadas
- Mensagens de erro/sucesso acessíveis

---

## 📝 Semântica HTML

O projeto utiliza as seguintes tags semânticas:

```html
<header>          <!-- Cabeçalho com navegação -->
<nav>             <!-- Elementos de navegação -->
<main>            <!-- Conteúdo principal -->
<section>         <!-- Seções de conteúdo -->
<article>         <!-- Artigos (cards de roteiros) -->
<aside>           <!-- Conteúdo relacionado (caixa de contato) -->
<footer>          <!-- Rodapé -->
<form>            <!-- Formulário de contato -->
<div role="dialog"> <!-- Modal (com ARIA) -->
```

### Benefícios

- 📱 Melhor interpretação por leitores de tela
- 🔍 Melhor indexação por motores de busca (SEO)
- 🎯 Estrutura clara da informação
- ♿ Mais acessível para usuários com deficiência
- 🤖 Compatível com tecnologias assistivas

---

## 🎨 Guia de Estilos

### Paleta de Cores Expandida

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Escuro | `#2c3e50` | Navegação e header |
| Azul Médio | `#34495e` | Gradientes e destaques |
| Azul Claro | `#3498db` | Links e foco |
| Laranja | `#e67e22` | Botões e destaques |
| Laranja Escuro | `#d35400` | Hover de botões |
| Cinza Claro | `#ecf0f1` | Fundos secundários |
| Cinza Médio | `#bdc3c7` | Bordas e elementos neutros |
| Branco | `#fff` | Fundo principal |

### Classes CSS Principais

- `.navbar` - Barra de navegação fixa com gradiente
- `.hamburger` - Menu mobile animado
- `.card` - Cards de roteiros com hover effects
- `.destaque` - Card especial com gradiente
- `.modal` - Pop-up com overlay
- `.btn-primary` - Botões com gradientes e animações
- `.back-to-top` - Botão de retorno com ícones
- `.info-box` - Caixa de informações com gradiente
- `.contact-form` - Formulário estilizado
- `.advice-list` - Lista animada de conselhos

### Animações CSS

- `fadeIn` - Aparecimento suave
- `slideUp` - Entrada deslizando para cima
- Transições em hover (0.3s ease)
- Animações de scroll com Intersection Observer

---

## 🔗 Navegação

A navegação combina **links internos** com **JavaScript** para interatividade:

```html
<!-- Menu principal -->
<nav class="navbar">
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#minha-viagem">Minha Viagem</a></li>
    <li><a href="#nos-encontre">Nos Encontre</a></li>
    <li><a href="#conselhos">Conselhos</a></li>
  </ul>
</nav>

<!-- Menu hamburger para mobile -->
<button class="hamburger" aria-label="Menu" aria-expanded="false">
  <span></span><span></span><span></span>
</button>
```

### Links Disponíveis

- `#top` - Topo da página (header)
- `#home` - Home/main
- `#minha-viagem` - Seção de roteiros
- `#nos-encontre` - Informações de contato
- `#conselhos` - Conselhos práticos

### Funcionalidades JavaScript

- Toggle do menu mobile
- Smooth scroll para âncoras
- Modais para detalhes dos roteiros
- Formulário com validação e feedback
- Animações de entrada baseadas em scroll

---

## 🎯 Melhorias Futuras

- [ ] Integração com backend real para reservas
- [ ] Sistema de multi-idioma (PT/EN)
- [ ] Dark mode toggle
- [ ] Carrossel de imagens nos cards
- [ ] Seção de testimonials/depoimentos
- [ ] Mapa interativo com Google Maps
- [ ] Sistema de newsletter
- [ ] PWA (Progressive Web App)
- [ ] Analytics e tracking
- [ ] Testes automatizados

---

## 📸 Screenshots

### Seção Hero
- Banner responsivo com gradiente e texto overlay

### Roteiros Interativos
- Cards com hover effects e modais detalhados

### Formulário de Contato
- Form funcional com validação e feedback visual

### Design Responsivo
- Layout adaptável para desktop, tablet e mobile

### Menu Mobile
- Hamburger animado com navegação suave

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se livre para fazer um fork e enviar pull requests.

### Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

---

## 👤 Autor

**Paulo Sérgio**

- GitHub: https://github.com/paulomoura24
- LinkedIn: https://www.linkedin.com/in/paulomouramoura
- Email: paulomoura@example.com

---

## 📞 Suporte

Para dúvidas ou problemas, abra uma **issue** no repositório ou entre em contato diretamente.

---

## ✅ Checklist - Requisitos Atendidos e Melhorias

### Requisitos Originais
- ✅ Banner dentro do `<main>` com imagem e overlay de texto
- ✅ Navegação mínima com `<nav>`
- ✅ Links de navegação internos com `#id`
- ✅ Navegação de volta ao topo em cada seção
- ✅ Três seções principais: Minha Viagem, Nos Encontre, Conselhos
- ✅ Efeito `:hover` em links e botões
- ✅ Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- ✅ Uso de `class` para elementos reutilizáveis
- ✅ Uso de `id` para elementos únicos
- ✅ Atributos alt em imagens
- ✅ Acessibilidade e WCAG compliance

### Melhorias Implementadas
- ✅ Design moderno com gradientes e animações
- ✅ Responsividade completa com menu hamburger
- ✅ JavaScript para interatividade avançada
- ✅ Formulário de contato funcional
- ✅ Modais para detalhes dos roteiros
- ✅ Lazy loading de imagens
- ✅ Animações de scroll performáticas
- ✅ Tipografia Google Fonts
- ✅ Ícones Font Awesome
- ✅ Feedback visual aprimorado
- ✅ Performance otimizada

---

**Última atualização**: 13 de março de 2026

Desenvolvido com ❤️ usando HTML5, CSS3, JavaScript e foco em acessibilidade e UX.
