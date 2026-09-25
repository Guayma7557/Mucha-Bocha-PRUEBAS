// ==========================================
// JAVASCRIPT PARA MUCHABOCHA
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Script de MuchaBocha cargado correctamente!');

    // Lógica para el botón de enviar del chat
    const sendBtn = document.querySelector('.chat-send-btn');
    const chatInput = document.querySelector('.chat-input-wrapper input');
    const chatContainer = document.querySelector('.comunidad-card');

    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', () => {
            const mensaje = chatInput.value.trim();
            
            if (mensaje !== '') {
                // Crear el nuevo mensaje en el DOM
                const nuevoMensaje = document.createElement('div');
                nuevoMensaje.className = 'chat-mensaje';
                nuevoMensaje.innerHTML = `
                    <div class="chat-avatar"><i class="fas fa-user"></i></div>
                    <div class="chat-contenido">
                        <span class="chat-usuario">Tú</span>
                        <p class="chat-texto">${mensaje}</p>
                    </div>
                `;
                
                // Insertar antes del input wrapper
                const inputWrapper = document.querySelector('.chat-input-wrapper');
                chatContainer.insertBefore(nuevoMensaje, inputWrapper);
                
                // Limpiar el input
                chatInput.value = '';
                
                // Hacer scroll hacia abajo
                chatContainer.scrollTop = chatContainer.scrollHeight;
            } else {
                alert('Por favor, escribí una pregunta antes de enviar.');
            }
        });

        // Permitir enviar con la tecla Enter
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
    }
});