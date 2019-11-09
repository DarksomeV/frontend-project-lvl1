import readlineSync from 'readline-sync';

const startWelcomeGame = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription || '');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const initLogic = (getGameData, user) => {
  const iter = (acc) => {
    const gameData = getGameData();
    console.log(`Question:${gameData.question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = gameData.answer;
    if (answer === rightAnswer && acc === 2) {
      console.log(`Congratulations, ${user}!`);
      return true;
    } if (answer === rightAnswer) {
      console.log('Correct!');
      return iter((acc + 1));
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${user}!`);
    return false;
  };

  return iter(0);
};

export const welcomeEvenGame = () => {
  const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
  const user = startWelcomeGame(gameDescr);

  const isEven = (n) => n % 2 === 0;

  const getRightAnswer = (n) => (isEven(n) ? 'yes' : 'no');

  const getRoundRandomNumber = (min, max) => Math.round((Math.random() * (max - min)) + min);

  const getGameData = () => {
    const question = getRoundRandomNumber(1, 100);
    const answer = getRightAnswer(question);
    return {
      question,
      answer,
    };
  };

  initLogic(getGameData, user);
};


export default startWelcomeGame;
