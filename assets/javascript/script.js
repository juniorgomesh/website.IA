document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");
    const alerta = document.getElementById("mensagem-alerta");

    if (!form || !alerta) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Captura de dados
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validações
        if (nome.length < 3) {
            exibirAlerta("Por favor, insira um nome válido!", "alerta-erro");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            exibirAlerta("Digite um e-mail válido.", "alerta-erro");
            return;
        }

        if (mensagem.length < 10) {
            exibirAlerta("A mensagem deve ter pelo menos 10 caracteres!", "alerta-erro");
            return;
        }

        // Sucesso simulado (console log para debug de dev)
        console.log("Dados capturados:", { nome, email, assunto, mensagem });
        
        exibirAlerta("Mensagem enviada com sucesso!", "alerta-sucesso");
        form.reset();

        // Esconde o alerta depois de 5 segundos
        setTimeout(() => {
            alerta.style.display = "none";
            alerta.className = "mensagem-alerta";
        }, 5000);
    });

    function exibirAlerta(texto, classe) {
        alerta.textContent = texto;
        alerta.style.display = "block";
        // Uso de backticks (crases) para interpolação de string correta
        alerta.className = `mensagem-alerta ${classe}`;
    }
});