document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    if(formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nome = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const assunto = document.getElementById('subject').value.trim();
            const mensagem = document.getElementById('message').value.trim();
            
            document.getElementById('txtNome').textContent = '';
            document.getElementById('txtEmail').textContent = '';
            document.getElementById('txtSubject').textContent = '';
            
            let valido = true;
            
            if (nome === '') {
                document.getElementById('txtNome').textContent = 'Por favor, insira seu nome';
                valido = false;
            } else if (nome.length < 3) {
                document.getElementById('txtNome').textContent = 'O nome deve ter pelo menos 3 caracteres';
                valido = false;
            }
            
            if (email === '') {
                document.getElementById('txtEmail').textContent = 'Por favor, insira seu email';
                valido = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('txtEmail').textContent = 'Por favor, insira um email válido';
                valido = false;
            }
            
            if (assunto === '') {
                document.getElementById('txtSubject').textContent = 'Por favor, insira um assunto';
                valido = false;
            }
            
            if (valido) {
                alert('Formulário enviado com sucesso!');
                this.reset();
            }
        });
    }

    const mapa = document.getElementById('mapa');
    if(mapa) {
        mapa.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        mapa.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    const linkedinIcon = document.querySelector('img[alt="LinkedIn"]');
    if(linkedinIcon) {
        linkedinIcon.closest('a').addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.linkedin.com/in/luanacardosodasilva7/', '_blank');
        });
    }

    const githubIcon = document.querySelector('img[alt="Github"]');
    if(githubIcon) {
        githubIcon.closest('a').addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://github.com/luacrds', '_blank');
        });
    }

    const instagramIcon = document.querySelector('img[alt="Instagram"]');
    if(instagramIcon) {
        instagramIcon.closest('a').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Link do Instagram não configurado');
        });
    }
});