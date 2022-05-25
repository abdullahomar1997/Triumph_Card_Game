import React from "react";
import "./Played.css";
import cards from "../../../constants/cards";

const Played = ({ playedcards }) => {
  return (
    <div className="game">
      {Array.from(playedcards).map(([key, card]) =>
        card ? (
          <div className="card">
            <img
              src={require(`../../../assets/deck/${card.cardName}`)}
              alt="me"
            />
          </div>
        ) : (
          <div className="card">
            <img alt="" />
          </div>
        )
      )}
    </div>
  );
};

export default Played;
