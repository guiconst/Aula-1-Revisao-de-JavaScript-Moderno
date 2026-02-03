// Array de jogos digitais da Steam (jogos pagos)
const jogos = [
    { nome: "Among Us", preco: 4.99, tags: ["Dedução Social", "Multijogador", "Casual"] },
    { nome: "FIFA 26", preco: 299.00, tags: ["Esportes", "Multijogador", "Simulação"] },
    { nome: "Grand Theft Auto V", preco: 29.99, tags: ["Ação", "Multijogador", "Mundo Aberto"] },
    { nome: "Sea of Thieves", preco: 39.99, tags: ["Aventura", "Multijogador", "Piratas"] },
    { nome: "The Witcher 3: Wild Hunt", preco: 39.99, tags: ["RPG", "Único Jogador", "Mundo Aberto"] },
    { nome: "Cyberpunk 2077", preco: 59.99, tags: ["RPG", "Único Jogador", "Ficção Científica"] },
];

//! Filtrar Jogos Com Tag "Multijogador"

const jogosMultiplayer = jogos.filter(jogo => jogo.tags.includes("Multijogador"));

//! Aplicar Desconto De Verão (50%)

const jogosComDesconto = jogosMultiplayer.map(jogo => ({
    ...jogo,
    precoComDesconto: jogo.preco * 0.5
}));

//! Somar Custo Para Comprar Todos

const custoTotal = jogosComDesconto.reduce((total, jogo) => total + jogo.precoComDesconto, 0);

console.log("========== Jogos Multiplayer Com Desconto De 50% ==========");
jogosComDesconto.forEach(jogo => {
    console.log(`${jogo.nome}: R$ ${jogo.precoComDesconto.toFixed(2)}`);
});
console.log(`\nCusto Total Para Comprar Todos: R$ ${custoTotal.toFixed(2)}`);
