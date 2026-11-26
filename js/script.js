document.getElementById("contato-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nomeContato").value;
    let email = document.getElementById("emailContato").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagemContato").value;
    let feedback = document.getElementById("feedback");

    feedback.textContent = "";
    feedback.className = "erro";

    if (nome.length < 3) {
        feedback.textContent = "❌ Nome deve ter pelo menos 3 caracteres.";
        return;
    }

    if (email.indexOf("@") === -1) {
        feedback.textContent = "❌ E-mail inválido. Digite um e-mail válido.";
        return;
    }

    if (assunto.length < 5) {
        feedback.textContent = "❌ Assunto deve ter pelo menos 5 caracteres.";
        return;
    }

    if (mensagem.length < 10) {
        feedback.textContent = "❌ Mensagem deve ter pelo menos 10 caracteres.";
        return;
    }

    feedback.textContent = "✅ Mensagem enviada com sucesso!";
    feedback.className = "sucesso";

    this.reset();
});

document.getElementById("nomeContato").addEventListener("input", function() {
    let valor = this.value;
    if (valor.length < 3) {
        document.getElementById("feedback").textContent = "Digite pelo menos 3 caracteres.";
        document.getElementById("feedback").className = "erro";
    } else {
        document.getElementById("feedback").textContent = "✅ Nome válido!";
        document.getElementById("feedback").className = "sucesso";
    }
});

document.getElementById("emailContato").addEventListener("input", function() {
    let valor = this.value;
    if (valor.indexOf("@") === -1) {
        document.getElementById("feedback").textContent = "Digite um e-mail válido.";
        document.getElementById("feedback").className = "erro";
    } else {
        document.getElementById("feedback").textContent = "✅ E-mail válido!";
        document.getElementById("feedback").className = "sucesso";
    }
});

document.getElementById("assunto").addEventListener("input", function() {
    let valor = this.value;
    if (valor.length < 5) {
        document.getElementById("feedback").textContent = "Digite pelo menos 5 caracteres.";
        document.getElementById("feedback").className = "erro";
    } else {
        document.getElementById("feedback").textContent = "✅ Assunto válido!";
        document.getElementById("feedback").className = "sucesso";
    }
});

document.getElementById("mensagemContato").addEventListener("input", function() {
    let valor = this.value;
    if (valor.length < 10) {
        document.getElementById("feedback").textContent = "Digite pelo menos 10 caracteres.";
        document.getElementById("feedback").className = "erro";
    } else {
        document.getElementById("feedback").textContent = "✅ Mensagem válida!";
        document.getElementById("feedback").className = "sucesso";
    }
});
