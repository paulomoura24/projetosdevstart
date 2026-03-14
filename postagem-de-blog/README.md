# 📝 Postagem de Blog

Projeto simples de simulação de postagem de blog, feito com **HTML**, **CSS** e **JavaScript**. A ideia é demonstrar uma interface moderna para criar e exibir posts, utilizando uma API fake (`jsonplaceholder.typicode.com`) e persistência local via `localStorage`.

---

## 🚀 Funcionalidades

- ✅ **Formulário de publicação** com validação simples
- ✅ **Chamada a API** (`fetch`) para simular envio de post
- ✅ **Feed de posts** renderizado dinamicamente
- ✅ **Persistência local** usando `localStorage`
- ✅ **Estado de carregamento** (botão desabilitado + texto alterado)
- ✅ **Mensagens de sucesso/erro** visuais
- ✅ **Exclusão de posts** do feed
- ✅ **Design moderno** com animações e responsividade

---

## 🧱 Estrutura do Projeto

```
postagem-de-blog/
├── index.html     # Página principal
├── style.css      # Estilos e responsividade
├── script.js      # Lógica de UI e persistência local
└── README.md      # Este arquivo
```

---

## 🛠 Tecnologias

- **HTML5** (semântico)
- **CSS3** (layout responsivo + animações)
- **JavaScript (ES6+)**
- **Web APIs**: `fetch`, `localStorage`, `Intersection Observer` (se aplicado)

---

## ▶️ Como Usar

### 1. Abra o `index.html`

Basta abrir o arquivo no navegador:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Alternativa: servidor local (recomendado)

Se preferir usar um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js
npx http-server
```

Acesse então `http://localhost:8000`.

---

## ✅ Como Funciona

1. Preencha **Título** e **Conteúdo**.
2. Clique em **Publicar**.
3. O app faz um `POST` para `https://jsonplaceholder.typicode.com/posts`.
4. O post é adicionado ao feed local e salvo em `localStorage`.
5. Você pode excluir posts diretamente do feed.

---

## 🧩 Possíveis Melhorias

- Adicionar edição de posts
- Suporte a múltiplos usuários
- Filtrar/ordenar posts
- Integração com backend real
- Autenticação (login/signup)
- Adicionar animações mais avançadas

---

## 📝 Observações

Este projeto é uma demo de front-end; a API usada (`jsonplaceholder`) não salva dados permanentemente. O armazenamento local (`localStorage`) é o que mantém seus posts entre recargas de página.

---

**Última atualização:** 13 de março de 2026

✨ Autor

Paulo Sérgio Queiroz Moura

📝 Licença

Este projeto é de uso livre para fins educacionais.
