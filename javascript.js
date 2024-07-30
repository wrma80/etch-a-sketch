var totalDeBox = 0;
let body = document.querySelector('body');
let principal = document.querySelector('#principal');

// botao que adiciona os elementos div na tela
let button = document.createElement('button');
button.textContent = 'Define size';
body.insertAdjacentElement('beforebegin', button);

button.addEventListener('click', () => {
    totalDeBox = prompt('Informe o tamanho da tela: \nmaximo de 100.');

    while (totalDeBox > 100) {
        totalDeBox = prompt('Tamanho máximo permitido: 100. Digite novamente: ');
    };

    console.log(totalDeBox);
    defineSketch(totalDeBox);
});

// botao remover todas as divs criadas
let button2 = document.createElement('button');
button2.textContent = 'Remover';
body.insertAdjacentElement('beforebegin', button2);

button2.addEventListener('click', () => {
    removeElements();
});

// funcao que cria as divs
function defineSketch(totalDeBox) {

    for (let i = 1; i <= totalDeBox; i++) {
        let line = document.createElement('div');
        line.setAttribute('class', 'line');
        principal.appendChild(line);
        
        for (let j = 1; j <= totalDeBox; j++){
            let element = document.createElement('div');
            element.setAttribute('class', 'column');
            line.appendChild(element);
        }
    };

};

// funcao que remove as divs da tela
function removeElements() {
    let container = document.querySelectorAll('.line');
    container.forEach((item) => item.remove());
}