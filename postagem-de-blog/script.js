// 1. Seletores
const blogForm = document.querySelector('#blog-form');
const tituloInput = document.querySelector('#titulo');
const conteudoInput = document.querySelector('#conteudo');
const btnPublicar = document.querySelector('#btn-publicar');
const postsFeed = document.querySelector('#posts-feed');

// 2. Estado da aplicação
let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// 3. Funções utilitárias
function showMessage(message, type = 'success') {
    const msgDiv = document.createElement('div');
    msgDiv.className = type;
    msgDiv.textContent = message;
    blogForm.parentNode.insertBefore(msgDiv, blogForm);
    setTimeout(() => msgDiv.remove(), 3000);
}

function setLoading(loading) {
    btnPublicar.disabled = loading;
    btnPublicar.textContent = loading ? 'Publicando...' : 'Publicar';
}

function renderPosts() {
    postsFeed.innerHTML = '';
    if (posts.length === 0) {
        postsFeed.innerHTML = '<p class="loading">Nenhum post ainda. Crie o primeiro!</p>';
        return;
    }
    posts.forEach((post, index) => {
        const postCard = document.createElement('article');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <div class="post-meta">
                <span>Postado em ${new Date(post.timestamp).toLocaleString('pt-BR')}</span>
                <button class="btn-delete" data-index="${index}">Excluir</button>
            </div>
        `;
        postsFeed.appendChild(postCard);
    });

    // Adicionar event listeners para botões de excluir
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            posts.splice(index, 1);
            localStorage.setItem('blogPosts', JSON.stringify(posts));
            renderPosts();
            showMessage('Post excluído com sucesso!', 'success');
        });
    });
}

// 4. Evento de Submit
blogForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = tituloInput.value.trim();
    const body = conteudoInput.value.trim();

    if (!title || !body) {
        showMessage('Por favor, preencha todos os campos.', 'error');
        return;
    }

    setLoading(true);

    try {
        // 5. Chamada da API (Fetch)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                title,
                body,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }

        const json = await response.json();

        // 6. Adicionar ao estado local
        const newPost = {
            ...json,
            timestamp: new Date().toISOString()
        };
        posts.unshift(newPost); // Adicionar no início
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        // 7. Renderizar posts
        renderPosts();

        // 8. Limpar formulário
        blogForm.reset();

        showMessage('Post publicado com sucesso!', 'success');

    } catch (error) {
        console.error("Erro na requisição:", error);
        showMessage('Ops! Algo deu errado ao publicar. Tente novamente.', 'error');
    } finally {
        setLoading(false);
    }
});

// 9. Inicialização
renderPosts();