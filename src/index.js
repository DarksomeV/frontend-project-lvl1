import readlineSync from 'readline-sync';

const startWelcomeGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default startWelcomeGame;
