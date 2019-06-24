import React from "react";

import CardListItem from "../CardListItem";

function CardList({ cards, turnCard }) {
  return cards.map((card, index) => <CardListItem key={`cardListItem-${index}`} item={card} turnCard={turnCard}/>);
}

export default CardList;
