document.getElementById('drawCardBtn').addEventListener('click', drawCard);

let deckId = null;

// Fetch a new deck when the page loads
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => response.json())
  .then(data => {
    deckId = data.deck_id;
  })
  .catch(error => console.error('Error:', error));

function drawCard() {
  if (!deckId) {
    console.error('No deck available!');
    return;
  }

  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      if (data.remaining === 0) {
       drawCard();
       
       
        // alert('No cards remaining!');
        // return;
      }

      const cardImage = data.cards[0].image;
      document.getElementById('cardImage').src = cardImage;
      document.getElementById('cardImage').style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
}
