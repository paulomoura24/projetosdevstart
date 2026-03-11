# 🌍 TripMe - Agência de Viagens

Uma landing page moderna e responsiva para agência de viagens, desenvolvida com **HTML5 semântico** e **CSS3**, com foco em **acessibilidade** e **experiência do usuário**.

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
- [Autor](#autor)

---

## 📖 Sobre

A **TripMe** é uma landing page criada para uma agência de viagens que oferece roteiros personalizados pela Europa, incluindo opções culturais, gastronômicas e de aventura. O projeto segue rigorosamente as normas de semântica HTML e acessibilidade web.

### Objetivo

Apresentar os serviços da agência de forma clara e atrativa, com navegação interna intuitiva e interfaces responsivas.

---

## ✨ Funcionalidades

- ✅ **Banner com Imagem de Fundo**: Seção hero com overlay de texto
- ✅ **Navegação Interna**: Links internos que rolam suavemente entre seções
- ✅ **Cards de Roteiros**: Três opções de viagem com imagens:
  - 🏛️ Roteiro Cultural (Cabril)
  - 🍽️ Roteiro Gastronômico
  - 🏔️ Roteiro de Aventura (Piz Bernina)
- ✅ **Seção "Nos Encontre"**: Informações de contato com endereço, telefone e horário
- ✅ **Conselhos": Recomendações práticas com ícones em emoji
- ✅ **Botões "Voltar ao Topo"**: Botões reais com ícones SVG em cada seção
- ✅ **Efeitos Interativos**: Hover em links, botões e cards
- ✅ **Design Responsivo**: Layout adaptável a diferentes tamanhos de tela

---

## 🛠️ Tecnologias

- **HTML5** - Semântica moderna
- **CSS3** - Estilização com flexbox
- **SVG** - Ícones vetoriais
- **Sem JavaScript** - Toda a navegação funciona com CSS e propriedades nativas

---

## 📁 Estrutura do Projeto

```
agencia-de-viagens/
├── index.html              # Página principal com estrutura semântica
├── style.css               # Estilos e responsividade
├── README.md               # Este arquivo
└── images/
    ├── Cabril.jpg          # Imagem - Roteiro Cultural
    ├── Gastronomia.webp    # Imagem - Roteiro Gastronômico
    └── PizBermina.jpg      # Imagem - Roteiro de Aventura
```

---

## 📦 Requisitos

Não há dependências externas. Basta um navegador moderno (Chrome, Firefox, Safari, Edge).

### Versão Mínima de Browser

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

---

## 🚀 Como Usar

### 1. Clonar ou Baixar o Projeto

```bash
git clone <https://github.com/paulomoura24/projetosdevstart.git>
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

Se preferir servir os arquivos localmente (recomendado):

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js
npx http-server

# No VS Code use a extensão Live Serve
abra o arquivo index.html com o Open With Live Server.
```

Depois acesse `http://localhost:8000` no navegador.

---

## ♿ Acessibilidade

O projeto segue as diretrizes **WCAG 2.1 Nível AA** e inclui:

### Atributos ARIA

- `aria-label` em botões e regiões navegáveis
- `aria-hidden="true"` em ícones decorativos
- `role="img"` na seção banner

### Textos Alternativos

- Todos os `<img>` possuem `alt` descritivo
- Ícones SVG possuem descrição adequada

### Navegação por Teclado

- Todos os botões e links são acessíveis via `Tab`
- Estados `:focus` claramente visíveis (contorno azul pontilhado)
- Navegação interna suave com `scroll-behavior: smooth`

### Contraste de Cores

- Texto com contraste mínimo de 4.5:1
- Links destacados com mudança de cor no hover
- Indicadores visuais claros em elementos interativos

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
<figure>          <!-- Imagens com semântica -->
```

### Benefícios

- 📱 Melhor interpretação por leitores de tela
- 🔍 Melhor indexação por motores de busca (SEO)
- 🎯 Estrutura clara da informação
- ♿ Mais acessível para usuários com deficiência

---

## 🎨 Guia de Estilos

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Escuro | `#2c3e50` | Navegação e header |
| Laranja | `#e67e22` | Botões e destaque |
| Cinza Claro | `#ecf0f1` | Fundos secundários |
| Cinza Médio | `#7f8c8d` | Texto terciário |
| Branco | `#fff` | Fundo principal |

### Classes CSS

- `.navbar` - Barra de navegação fixa
- `.card` - Cards de roteiros
- `#card-destaque` - Card especial (Gastronômico)
- `.back-to-top` - Botão de retorno
- `.info-box` - Caixa de informações (contato)
- `.advice-list` - Lista de conselhos

---

## 🔗 Navegação

A navegação funciona com **links internos** usando fragmentos de URL:

```html
<!-- No menu -->
<a href="#minha-viagem">Minha Viagem</a>

<!-- Na seção -->
<section id="minha-viagem">...</section>
```

### Links Disponíveis

- `#top` - Topo da página (header)
- `#home` - Home/main
- `#minha-viagem` - Seção de roteiros
- `#nos-encontre` - Informações de contato
- `#conselhos` - Conselhos práticos

---

## 🎯 Melhorias Futuras

- [ ] Adicionar formulário de contato
- [ ] Integrar com backend para reservas
- [ ] Adicionar seção de testimoniais
- [ ] Implementar carrossel de imagens
- [ ] Mobile-first refinements
- [ ] Dark mode
- [ ] Multi-idioma

---

## 📸 Screenshots

### Seção Hero
- Banner com imagem de fundo e texto overlay

### Roteiros
- Cards com imagens dos três roteiros disponíveis

### Informações
- Seção de contato com endereço, telefone e horários

### Conselhos
- Lista com recomendações em um visual amigável

---

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se livre para fazer um fork e enviar pull requests.

---

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

---

## 👤 Autor

**Paulo Sérgio**

- GitHub: https://github.com/paulomoura24
- Linkedin: https://www.linkedin.com/in/paulomouramoura

---

## 📞 Suporte

Para dúvidas ou problemas, abra uma **issue** no repositório ou entre em contato diretamente.

---

## ✅ Checklist - Requisitos Atendidos

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

---

**Última atualização**: 10 de março de 2026

Desenvolvido com ❤️ usando HTML5, CSS3 e acessibilidade em mente.
