const form = document.getElementById('Forms');
const aprovadoimg = '<img src="./images/aprovado.png" alt="Aproved" />';
const Reprovadoimg = '<img src="./images/reprovado.png" alt="miss" />';
const AttNome = [];
const Nota = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaT();
    atualizaM();
});

function adicionarLinha() {
    const inputNome = document.getElementById('AttNome');
    const inputValor = document.getElementById('Nota');

    AttNome.push(inputNome.value)
    Nota.push(inputValor.value)

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputValor.value}</td>`;
    linha += `<td>${inputValor.value >= 7 ? aprovadoimg : Reprovadoimg}</td>`;
    linha += '</tr>';

    linhas += linha

    inputNome.value = '';
    inputValor.value = '';
}

function atualizaT() {
    const corpot = document.querySelector('tbody');
    corpot.innerHTML = linhas;
}

function atualizaM() {
    let somadasnotas = 0;

    for (let i = 0; i < Nota.length; i++){
        somadasnotas += Nota[i];
    }

    console.log(somadasnotas);
}