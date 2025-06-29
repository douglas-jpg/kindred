import axios from 'axios';

const API_URL = 'http://localhost:8080/comments';
const comentariosLista = document.getElementById('comentarios-lista');
const comentarioForm = document.getElementById('comentario-form');

// Funções de API
export async function fetchComments() {
    const res = await axios.get(API_URL);
    return res.data;
}

export async function postComment(author, text) {
    const res = await axios.post(API_URL, { author, text });
    return res.data;
}

export async function reactComment(id, type) {
    const res = await axios.patch(`${API_URL}/${id}/${type}`);
    return res.data;
}

// Funções de renderização e eventos
export async function renderComments() {
    if (!comentariosLista) return;

    comentariosLista.innerHTML = '';
    try {
        const comentarios = await fetchComments();
        comentarios.reverse().forEach((comentario) => {
            const div = document.createElement('div');
            div.className = 'comentario';
            div.innerHTML = `
                <strong>${comentario.author}</strong>
                <p>${comentario.text}</p>
                <button class="curtir" data-id="${comentario.id}">Curtir <span>${comentario.like}</span></button>
                <button class="descurtir" data-id="${comentario.id}">Descurtir <span>${comentario.deslike}</span></button>
            `;
            comentariosLista.appendChild(div);
        });
    } catch (err) {
        comentariosLista.innerHTML = '<p>Erro ao carregar comentários.</p>';
    }
}

export function setupCommentForm() {
    if (!comentarioForm) return;

    comentarioForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = document.getElementById('usuario-nome').value.trim();
        const texto = document.getElementById('comentario-texto').value.trim();
        if (!nome || !texto) return;
        try {
            await postComment(nome, texto);
            comentarioForm.reset();
            renderComments();
        } catch (err) {
            alert('Erro ao enviar comentário.');
        }
    });
}

export function setupCommentReactions() {
    if (!comentariosLista) return;

    comentariosLista.addEventListener('click', async (e) => {
        if (
            e.target.classList.contains('curtir') ||
            e.target.classList.contains('descurtir')
        ) {
            const id = Number(e.target.getAttribute('data-id'));
            const type = e.target.classList.contains('curtir')
                ? 'like'
                : 'deslike';
            try {
                await reactComment(id, type);
                renderComments();
            } catch (err) {
                alert('Erro ao reagir ao comentário.', err);
            }
        }
    });
}

// Inicialização dos comentários
export function initComments() {
    renderComments();
    setupCommentForm();
    setupCommentReactions();
}
