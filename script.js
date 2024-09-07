const cards = [
    { card: '', rule: 'Everyone drinks!' },
    { card: '', rule: 'Give out 2 drinks.' },
    { card: '', rule: 'You drink 3 times.' },
    { card: '', rule: 'Everyone cheers and drinks.' },
    { card: '', rule: 'Pick 5 people to drink.' },
    { card: '', rule: 'Everyone drinks 6 sips.' },
    { card: '', rule: 'Pick a drinking buddy.' },
    { card: '', rule: 'Sing a song or drink 8 sips.' },
    { card: '', rule: 'Make a rule.' },
    { card: '', rule: 'Everyone drinks 10 sips.' },
    { card: '', rule: 'You pick a person to drink.' },
    { card: '', rule: 'Question master. If anyone answers your question, they drink.' },
    { card: '', rule: 'Waterfall!' },
    { card: '', rule: 'Do a dare or drink twice.' },
    { card: '', rule: 'Tell a truth or drink 3 times.' },
    { card: '', rule: 'Swap seats with someone.' },
    { card: '', rule: 'Act like an animal for 1 minute or drink 5 times.' },
    { card: '', rule: 'Imitate someone until your next turn.' },
    { card: '', rule: 'Dance for 30 seconds or drink 2 times.' },
    { card: '', rule: 'Do 10 push-ups or drink 3 times.' },
    { card: '', rule: 'Tell a joke. If no one laughs, drink 4 times.' },
    { card: '', rule: 'Act like a superhero for 1 minute.' },
    { card: '', rule: 'Swap an item of clothing with another player.' },
    { card: '', rule: 'Let another player draw on you with a marker.' },
    { card: '', rule: 'Talk in an accent until your next turn.' },
    { card: '', rule: 'Let another player send a text from your phone.' },
    { card: '', rule: 'Spin around 10 times and try to walk straight.' },
    { card: '', rule: 'Do a cartwheel or drink 5 times.' },
    { card: '', rule: 'Pretend to be a waiter for 2 minutes.' },
    { card: '', rule: 'Tell a funny story.' },
    { card: '', rule: 'Make an animal sound every time you drink until your next turn.' },
    { card: '', rule: 'Balance a book on your head for 1 minute.' },
    { card: '', rule: 'Compliment everyone in the group.' },
    { card: '', rule: 'Speak in rhyme until your next turn.' },
    { card: '', rule: 'Pretend to be a statue for 1 minute.' },
    { card: '', rule: 'Make up a nickname for each player.' },
    { card: '', rule: 'Imitate a celebrity until your next turn.' },
    { card: '', rule: 'Take one piece of clothing off.'},
    { card: '', rule: 'Spell a word correctly or take 2 sips.'},
    { card: '', rule: 'Play truth or dare for one turn. If you fail the Truth/Dare drink.'},
    { card: '', rule: 'Give a lap dance to someone or drink 5 times.'},
    { card: '', rule: 'Be blindfolded and fed a snack by someone else or take 3 sips.'},
    { card: '', rule: 'Whisper something naughty to the person on your left or take 2 sips.'},
    { card: '', rule: 'Let someone read a random text message from your phone or take 5 sips.'},
    { card: '', rule: 'English or Spanish'},
    { card: '', rule: 'Share an embarrassing story or take 4 sips.' },
    { card: '', rule: 'Do an impression of another player until someone guesses who it is.' },
    { card: '', rule: 'Everyone point at someone; the person with the most fingers pointing at them drinks.' },
    { card: '', rule: 'The person with the longest hair drinks.' },
    { card: '', rule: 'Speak in a different language until your next turn or drink 3 times.' },
    { card: '', rule: 'Do a silly dance for 1 minute or drink 3 times.' },
    { card: '', rule: 'Let another player write a word on your forehead.' },
    { card: '', rule: 'Pretend to be a waiter and serve drinks for the next 2 rounds.' },
    { card: '', rule: 'Everyone who is single drinks 2 times.' },
    { card: '', rule: 'Pretend to be a famous movie character for the next round.' },
    { card: '', rule: 'Show your best dance move or drink 2 times.' },
    { card: '', rule: 'Everyone with blue eyes drinks 1 time.' },
    { card: '', rule: 'Imitate a cartoon character for 1 minute or drink 3 times.' },
    { card: '', rule: 'Tell a secret about yourself or drink 2 times.' },
    { card: '', rule: 'Do 5 squats or drink 2 times.' },
    { card: '', rule: 'Act out a scene from your favorite movie until someone guesses it.' },
    { card: '', rule: 'Describe your most embarrassing moment or drink 4 times.' },
    { card: '', rule: 'Let the group decide a new rule that you must follow for the rest of the game.' },
    { card: '', rule: 'Pretend to be in a talk show and answer questions from the group.' },
    { card: '', rule: 'Do 10 jumping jacks or drink 3 times.' }
    
];

let players = [];
let currentPlayerIndex = 0;
let usedCards = [];

document.getElementById('startGameBtn').addEventListener('click', startGame);
document.getElementById('drawCardBtn').addEventListener('click', drawCard);

function startGame() {
    players = [];
    currentPlayerIndex = 0;
    usedCards = [];
    document.querySelectorAll('.players input').forEach((input, index) => {
        if (input.value.trim() !== '') {
            players.push(input.value.trim());
        }
    });

    if (players.length < 5) {
        alert('Please enter names for all 5 players.');
        return;
    }

    document.querySelector('.players').style.display = 'none';
    document.querySelector('.gameplay').style.display = 'block';
    drawCard();
}

function drawCard() {
    if (usedCards.length >= cards.length) {
        alert('All cards have been drawn!');
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * cards.length);
    } while (usedCards.includes(randomIndex));

    const selectedCard = cards[randomIndex];
    usedCards.push(randomIndex);
    const currentPlayer = players[currentPlayerIndex];

    document.getElementById('cardDisplay').innerText = selectedCard.card;
    document.getElementById('ruleDisplay').innerText = `${currentPlayer}: ${selectedCard.rule}`;

    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}
