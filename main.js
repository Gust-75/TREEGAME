let pontos = 0;
let incremento = 1;
const fatorCusto = 1.5;

const upgrades = [
    {
        id: "btn1",
        ganho: 1,
        custoBase: 10,
        nivel: 0,
        custoSpan: "custo1",
        nivelSpan: "nivel1"
    },
    {
        id: "btn2",
        ganho: 2,
        custoBase: 25,
        nivel: 0,
        custoSpan: "custo2",
        nivelSpan: "nivel2"
    },
    {
        id: "btn3",
        ganho: 5,
        custoBase: 100,
        nivel: 0,
        custoSpan: "custo3",
        nivelSpan: "nivel3"
    }
];

function calcularCusto(up){
    return Math.floor(up.custoBase * (fatorCusto ** up.nivel));
}

function atualizarTela(){
    document.getElementById("pts").innerText = pontos;

    upgrades.forEach((up, index) => {
        const btn = document.getElementById(up.id);
        const custoAtual = calcularCusto(up);

        document.getElementById(up.custoSpan).innerText = `Custo: ${custoAtual}`;
        document.getElementById(up.nivelSpan).innerText = `Nível: ${up.nivel}`;

        if (pontos >= custoAtual) {
            btn.disabled = false;
            btn.classList.add("compravel");
        } else {
            btn.disabled = true;
            btn.classList.remove("compravel");
        }

        btn.onclick = () => comprarUpgrade(index);
    });
}

function comprarUpgrade(index){
    const up = upgrades[index];
    const custoAtual = calcularCusto(up);

    if (pontos < custoAtual) return;

    pontos -= custoAtual;
    incremento += up.ganho;
    up.nivel += 1;

    atualizarTela();
}

function clicado(){
    pontos += incremento;
    atualizarTela();
}

atualizarTela();
