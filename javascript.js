  // Função para gerar um número aleatório entre min (incluído) e max (excluído)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Variável para armazenar o último número aleatório gerado
var lastRandomNumber = null;

// Função para realizar uma rodada de aposta
function playRound() {
    var coins = 50; // Moedas iniciais

    function placeBet() {
        var betInput = document.getElementById("betInput");
        var bet = parseInt(betInput.value);

        var chosenNumberInput = document.getElementById("chosenNumberInput");
        var chosenNumber = parseInt(chosenNumberInput.value);

        if (chosenNumber < 1 || chosenNumber > 6 || isNaN(chosenNumber)) {
            alert("Por favor, escolha um número válido entre 1 e 6.");
            return getBet(); // Chama a função para permitir que o jogador digite outro número
        }

        if (bet < 1 || isNaN(bet)) {
            alert("A aposta mínima é de 1 moeda.");
            return getBet(); // Chama a função para permitir que o jogador digite outra aposta
        }

        var diceResult = getRandomInt(1, 7); // Gerar número aleatório entre 1 e 6
        lastRandomNumber = diceResult; // Armazenar o último número gerado

        alert("O número sorteado foi: " + diceResult);

        if (chosenNumber === diceResult) {
            coins += bet; // Ganha o dobro da aposta
            alert("Parabéns! Você acertou! Ganhou " + bet + " moedas. Total de moedas: " + coins);
        } else {
            coins -= bet; // Perde a aposta
            alert("Você errou! Perdeu " + bet + " moedas. Total de moedas: " + coins);
        }

        if (coins >= 200) {
            alert("Parabéns, ganhou o jogo!");
            return; // Sai da função se o jogador ganhar o jogo
        }

        if (coins <= 0) {
            alert("Game Over! Você ficou sem moedas.");
            return; // Sai da função se o jogador perder o jogo
        }

        // Se ainda houver moedas e o jogo não terminou, chama a função para permitir outra aposta
        return getBet();
    }

    // Função para permitir que o jogador faça uma nova aposta
    function getBet() {
        var again = confirm("Deseja fazer outra aposta?");
        if (again) {
            // Se o jogador deseja fazer outra aposta, chama a função para fazer uma nova rodada de aposta
            placeBet();
        }
    }

    // Iniciar o jogo fazendo a primeira aposta
    placeBet();
}