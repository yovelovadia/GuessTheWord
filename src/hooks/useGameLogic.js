import { useState, useEffect } from 'react';
import randomWords from 'random-words';
import routes from '@routes';

const useGameLogic = ({ replace }) => {
  const [randomWord, setRandomWord] = useState('');
  const [randomWordsBlanked, setRandomWordsBlanked] = useState([]);
  const [input, setInput] = useState('');
  const [level, setLevel] = useState(1);
  const [time, setTime] = useState(30);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    generateWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleTime = () => {
      setTime((p) => p - 1);
      if (time <= 0) handleLivesLost();
    };
    const timeout = setTimeout(handleTime, 1000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const handleLivesLost = () => {
    setLives((p) => p - 1);
    if (lives - 1 <= 0) {
      replace(routes.gameOver.name, { level });
    } else {
      prepareNewTurn();
    }
  };

  const handleButtonClick = () => {
    if (input.toLowerCase() === randomWord) {
      setLevel((p) => p + 1);
      prepareNewTurn();
    } else {
      handleLivesLost();
    }
  };

  const prepareNewTurn = () => {
    setInput('');
    setTime(30);
    generateWord();
  };

  const generateWord = () => {
    const random = randomWords({ exactly: 1, maxLength: 10, join: '' });
    const splittedWord = random.split('');
    for (let i = 0; i < level / 5; i++) {
      const randomIndex = Math.floor(Math.random() * splittedWord.length);
      splittedWord[randomIndex] = ' ';
    }
    setRandomWordsBlanked(splittedWord);
    setRandomWord(random);
  };

  return {
    input,
    time,
    level,
    lives,
    randomWordsBlanked,
    handleButtonClick,
    setInput,
  };
};

export default useGameLogic;
