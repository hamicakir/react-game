import React from "react";

import CardListItem from "../CardListItem";

function CardList({ cards }) {
  return cards.map((card, index) => <CardListItem key={`cardListItem-${index}`} item={card} />);
}

export default CardList;
