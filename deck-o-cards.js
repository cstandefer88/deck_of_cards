// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  var topCard = null;

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops

  for (var i = 0; i < suits.length; i++) {
    var card = {};

    for (var j = 0; j < values.length; j++) {
      card = {
        suit: suits[i],
        value: values[j]
      };
      cards.push(card);
    }
  }

  shuffledCards = shuffle(cards);

  console.log(shuffledCards);

  topcard = shuffledCards[0];

  console.log('The deck has ' + shuffledCards.length + ' cards.')

  console.log('The top cards is the ' + topCard.value + ' of ' + topCard.suit + '.')

  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below


  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

}



// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

deck_o_cards();
