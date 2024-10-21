function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login !== "" && senha !== "") {
        alert('Sucesso');
        location.href = "menu.html";
    } else {
        alert('Por favor, preencha ambos os campos');
    }
}
