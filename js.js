const form = document.getElementById('Forms');
const aprovadoimg = '<img src="./images/aprovado.png" alt="Aproved" />';
const Reprovadoimg = '<img src="./images/reprovado.png" alt="miss" />';
const AttNome = [];
const Nota = [];
const spanapro = '<span class="aprovado">Aprovado</span>'
const spanrep = '<span class="reprovado">Reprovado</span>'
const notaminima = parseFloat(prompt('Digite a nota minima: '));

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

    if(AttNome.includes(inputNome.value)){
        alert(`A atividade ${inputNome.value} já existe.`);
    } else{
    AttNome.push(inputNome.value);
    Nota.push(parseFloat(inputValor.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputValor.value}</td>`;
    linha += `<td>${inputValor.value >= notaminima ? aprovadoimg : Reprovadoimg}</td>`;
    linha += '</tr>';

    linhas += linha

    inputNome.value = '';
    inputValor.value = '';
    }
}

function atualizaT() {
    const corpot = document.querySelector('tbody');
    corpot.innerHTML = linhas;
}

function atualizaM() {
    const médiaF = calculamédiaF();

    document.getElementById('Média').innerHTML = médiaF
    document.getElementById('MédiaIMG').innerHTML = médiaF >= notaminima ? spanapro : spanrep;
}

function calculamédiaF(){
    let somadasnotas = 0;

    for (let i = 0; i < Nota.length; i++){
        somadasnotas += Nota[i];
    }

    return somadasnotas / Nota.length;
}