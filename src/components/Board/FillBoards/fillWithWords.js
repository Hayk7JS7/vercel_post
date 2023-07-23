import { setWordsArrayCapacity } from "../../../utils/BoardUtils";

function shuffle(array) {
  array = [...array]
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

export function fillWithWords(board, WORDS, BOARD_SIZE) {
  let correctAnswerArr = []
  let shuffledArr = shuffle(WORDS)
    for (let word of shuffledArr) {
      if (correctAnswerArr.length >= 10) {
        break;
      }

      let placed = false;
      while (!placed) {
        let dir = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        let startX = Math.floor(Math.random() * BOARD_SIZE);
        let startY = Math.floor(Math.random() * BOARD_SIZE);
        if (dir === 'horizontal' && startX + word.length <= BOARD_SIZE) {
          let canPlace = true;
          for (let i = 0; i < word.length; i++) {
            if (board[startY][startX + i] !== '') {
              canPlace = false;
              break;
            }
          }
          if (canPlace) {
            let axesXArr = []
            for (let i = 0; i < word.length; i++) {
              board[startY][startX + i] = word[i];
              axesXArr.push(startX + i)
            }
            correctAnswerArr.push({name: word, axeses: {y: startY, x: axesXArr}})
            placed = true;
          }
        } else if (dir === 'vertical' && startY + word.length <= BOARD_SIZE) {
          let canPlace = true;
          for (let i = 0; i < word.length; i++) {
            if (board[startY + i][startX] !== '') {
              canPlace = false;
              break;
            }
          }
          if (canPlace) {
            let axesYArr = []
            for (let i = 0; i < word.length; i++) {
              board[startY + i][startX] = word[i];
              axesYArr.push(startY + i)
            }
            correctAnswerArr.push({name: word, axeses: {x: startX, y: axesYArr}})
            placed = true;
          }
        }
      }
    }
    let filledArr = correctAnswerArr.map(words => words.name)
    setWordsArrayCapacity(filledArr)
    return correctAnswerArr
}

