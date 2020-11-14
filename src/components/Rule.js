const findTheWinner = (squares, x, y) => {
  if (x === null || y === null) return;
  const blackOrWhite = squares[y][x]; // find out this black or white
  let winner;
  // calculate how many same color chesses in a row
  const countTotal = (blackOrWhite, x, y, directionX, directionY) => {
    let chessInRow = 0;
    let nextX = x;
    let nextY = y;

    while (chessInRow < 5) {
      nextX += directionX;
      nextY += directionY;
      if (
        nextX < 0 ||
        nextX >= 19 ||
        nextY < 0 ||
        nextY >= 19 ||
        squares[nextY][nextX] !== blackOrWhite
      )
        break;
      chessInRow++;
    }
    return chessInRow;
  };
  // if there are 4 chesses in a row, we have the winner

  if (
    countTotal(blackOrWhite, x, y, 1, 0) +
      countTotal(blackOrWhite, x, y, -1, 0) >=
      4 ||
    countTotal(blackOrWhite, x, y, 0, 1) +
      countTotal(blackOrWhite, x, y, 0, -1) >=
      4 ||
    countTotal(blackOrWhite, x, y, 1, 1) +
      countTotal(blackOrWhite, x, y, -1, -1) >=
      4 ||
    countTotal(blackOrWhite, x, y, -1, 1) +
      countTotal(blackOrWhite, x, y, 1, -1) >=
      4
  ) {
    winner = blackOrWhite;
    console.log(winner);
  }
  console.log(winner);
  return winner;
};

export default findTheWinner;
