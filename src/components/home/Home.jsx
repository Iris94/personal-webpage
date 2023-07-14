import React, { useState, useEffect } from 'react';
import './home.css';

const alphabet = Array.from(Array(26), (_, index) => String.fromCharCode(65 + index));
const textChar = 'I love solving problems with JS and I can center div';
const nameChar = 'MIRZA IRIS';
const proChar = 'Front-End Developer';

function Home() {
  const initialRandomLetter = () => alphabet[Math.floor(Math.random() * alphabet.length)];
  const [binaryLetter, setBinaryLetter] = useState(Array.from({ length: 10 }, initialRandomLetter));
  const [binaryLetterMain, setBinaryLetterMain] = useState(Array.from({ length: 19 }, initialRandomLetter));
  const [binaryLetterText, setBinaryLetterText] = useState(Array.from({ length: 52 }, initialRandomLetter));

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const timers = Array.from({ length: 35 }, (_, index) => {
        const timer = setInterval(() => {
          setBinaryLetter(prevLetter => {
            const newLetters = prevLetter.map(letter => {
              const random = Math.floor(Math.random() * alphabet.length);
              const newLetter = alphabet[random];
              return letter !== '0' ? newLetter : '';
            });
            return newLetters;
          });

          setBinaryLetterMain(prevLetter => {
            const newLetters = prevLetter.map(letter => {
              const random = Math.floor(Math.random() * alphabet.length);
              const newLetter = alphabet[random];
              return letter !== '0' ? newLetter : '';
            });
            return newLetters;
          });

          setBinaryLetterText(prevLetter => {
            const newLetters = prevLetter.map(letter => {
              const random = Math.floor(Math.random() * alphabet.length);
              const newLetter = alphabet[random];
              return letter !== '0' ? newLetter : '';
            });
            return newLetters;
          });
        }, 100);

        setTimeout(() => {
          clearInterval(timer);
          setBinaryLetter(Array.from(nameChar));
          setBinaryLetterMain(Array.from(proChar));
          setBinaryLetterText(Array.from(textChar));
        }, 1000);

        return timer;
      });

      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }, 3000); 

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className='home__container'>
    <div className='landing-info'>
      <h3 className='landing-name'>
        {binaryLetter.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h3>

      <h1 className='landing-pro'>
        {binaryLetterMain.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>

      <p className='landing-para'>
        {binaryLetterText.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </p>
    </div>
    </div>
  );
}

export default Home;
