const contents = {
    1: '<h3>Módulo 1</h3><p>Domínio do computador, sistema operativo, gestão de ficheiros, atalhos e segurança básica.</p>',
    2: '<h3>Módulo 2</h3><p>Uso profissional da internet, email, Google Drive e trabalho colaborativo.</p>',
    3: '<h3>Módulo 3</h3><p>Word, Excel e PowerPoint aplicados ao mercado de trabalho.</p>',
    4: '<h3>Módulo 4</h3><p>IA, segurança da informação e PDFs avançados.</p>',
    5: '<h3>Competências Finais</h3><ul><li>Autonomia digital</li><li>Produtividade profissional</li><li>Preparação para o mercado de trabalho</li></ul>'
};

function openModal(id) {
    document.getElementById('modalText').innerHTML = contents[id];
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

/* SCROLL REVEAL */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
