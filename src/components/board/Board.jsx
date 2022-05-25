import React, { useEffect, useState } from "react";
import "./Board.css";
import MyDeck from "./userDeck/UserDeck";
import Played from "./played/Played";
import cards from "../../constants/cards";
import assignCards from "../../utils/assignCards";
import shuffleArray from "../../utils/shuffleArray";

const Board = () => {
  const [playedcards, setPlayedCards] = useState([]);
  const [playedcards1, setPlayedCards1] = useState(
    new Map([
      ["player 2", null],
      ["player 1", null],
    ])
  );
  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [deck, setDeck] = useState(shuffleArray(cards()));

  useEffect(() => {
    let createPlayer1Cards = [];
    let createPlayer2Cards = [];

    for (let i = 0; i < 3; i++) {
      createPlayer1Cards.push(deck.pop());
      createPlayer2Cards.push(deck.pop());
    }
    setDeck(deck);
    setPlayer1Cards(createPlayer1Cards);
    setPlayer2Cards(createPlayer2Cards);
  }, []);

  return (
    <div className="container board__container">
      <MyDeck playerCards={player2Cards} />
      <Played playedcards={playedcards1} />
      <MyDeck
        playerCards={player1Cards}
        player2Cards={player2Cards}
        playedcards={playedcards1}
        setPlayedCards={setPlayedCards1}
        setPlayerCards={setPlayer1Cards}
        setPlayer2Cards={setPlayer2Cards}
        deck={deck}
        setDeck={setDeck}
      />
    </div>
  );
};

export default Board;
