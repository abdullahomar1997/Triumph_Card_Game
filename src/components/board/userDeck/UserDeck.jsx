import React from "react";
import updateDeck from "../../../utils/updateDeck";
import "./UserDeck.css";

let updatedDeck;

const UserDeck = ({
  playerCards,
  player2Cards,
  playedcards,
  setPlayedCards,
  setPlayerCards,
  setPlayer2Cards,
  deck,
  setDeck,
}) => {
  const OnCardPlayedHandler = (card) => {
    let cpuCard = cpuPlayAutomatically();

    setPlayedCards(playedcards.set("player 1", card));
    setPlayedCards(playedcards.set("player 2", cpuCard));

    let createPlayer1Cards = playerCards.filter((c) => c.id !== card.id);
    let createPlayer2Cards = player2Cards.filter((c) => c.id !== cpuCard.id);

    for (let i = 0; i < 1; i++) {
      if (deck.length) {
        createPlayer1Cards.push(deck.pop());
        createPlayer2Cards.push(deck.pop());
      }
    }

    setDeck(deck);
    setPlayerCards(createPlayer1Cards);
    setPlayer2Cards(createPlayer2Cards);
  };

  const cpuPlayAutomatically = () => {
    let card = player2Cards[0];

    return card;
  };

  return (
    <div className="your__cards">
      {playerCards.map((card) => (
        <div className="card" onClick={() => OnCardPlayedHandler(card)}>
          <img
            src={require(`../../../assets/deck/${card.cardName}`)}
            alt="me"
          />
        </div>
      ))}
    </div>
  );
};

export default UserDeck;
