export const cardGenerator = () => {
  let cards = [];

  for (let i = 0; i < 16; i+=2) {
    let index = Math.floor(Math.random() * 1000);

    cards.push({
      id : i,
      relation : i+1,
      turned : false,
      imgUrl : `https://picsum.photos/170/170?image=${index}`,
      discovered : false
    });
    cards.push({
      id : i+1,
      relation : i,
      turned : false,
      imgUrl : `https://picsum.photos/170/170?image=${index}`,
      discovered : false
    });
  }

  const data = shuffle(cards);

  return data;
}

function shuffle(array) {
  let currentIndex = array.length, temp, randomIndex ;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}
