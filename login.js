function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login !== "" && senha !== "") {
        sessionStorage.setItem('usuario', login);
        
        alert('Sucesso');
        location.href = "menu.html";
    } else {
        alert('Por favor, preencha ambos os campos');
    }
}
