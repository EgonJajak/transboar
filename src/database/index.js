import cards from "./cards/cards-store";
import noCard from "./cards/no-card";

export const getCardByName = (cardName, cards = dataSource) => {
  return (
    cards.find(card => card.name.toLowerCase() === cardName.toLowerCase()) ||
    noCard
  );
};

 //TODO: hill nenajde hills kartu !!

export const getCardsByText = (value, cards = dataSource) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  const cardContainsString = (card, inputString) => {
    return (
      card.name.toLowerCase().indexOf(inputString) > -1 ||
      card.transName.toLowerCase().indexOf(inputString) > -1
    );
  };

  return inputLength > 0
    ? dataSource.filter(card => {
        return cardContainsString(card, inputValue);
      })
    : [];
};

export const getCardNamesByText = (value, cards = dataSource) => {
  return getCardsByText(value, cards).map(card => card.name);
};

export const getCardById = (id, cards = dataSource) => {
  return cards.find(card => card.id === id) || noCard;
};

export const isNoCard = card => {
  return card === noCard;
};

export const dataSource = cards.map((card, index) => {
  card.id = index;
  card.fileName = encodeURIComponent(card.name);
  return card;
});
