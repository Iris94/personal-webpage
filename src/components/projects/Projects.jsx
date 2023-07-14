import React, { useState, useEffect } from 'react';
import './projects.css';
import Neon from '../../assets/neon.gif';
import Law from '../../assets/law.gif';
import Tetris from '../../assets/tetris.gif';
import Laptop from '../../assets/laptop.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Javascript from '../../assets/javascript.png'
import Sass from '../../assets/sass.png'
import ReactLogo from '../../assets/react.png'
import Bootstrap from '../../assets/bootstrap.png'


function Projects() {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [defaultGif, setDefaultGif] = useState(Neon);
  const [defaultText, setDefaultText] = useState(neonText);
  const [defaultHeader, setDefaultHeader] = useState(neonHeader);
  const [gifNum, setGifNum] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openProject = (defaultGif) => {
    let url = '';

    switch (defaultGif) {
      case Tetris:
          url = 'https://iris94.github.io/Tetris/'
        break;
      case Neon:
        url = 'https://iris94.github.io/neon-radio/'
        break;
      case Law:
        url = 'https://iris94.github.io/Law-Project/'
        break;
      default:
        break;
    }

    return window.open(url, '_blank')
  }

  const switchToNeonCity = () => {
    setDefaultGif(Neon);
    setDefaultText(neonText);
    setDefaultHeader(neonHeader);
    setGifNum(1);
  };

  const switchToLaw = () => {
    setDefaultGif(Law);
    setDefaultText(lawText);
    setDefaultHeader(lawHeader);
    setGifNum(2);
  };

  const switchToTetris = () => {
    setDefaultGif(Tetris);
    setDefaultText(tetrisText);
    setDefaultHeader(tetrisHeader);
    setGifNum(3);
  };

  const previousCode = () => {
    setGifNum((prevNum) => {
      if (prevNum === 1) {
        return 3;
      } else {
        return prevNum - 1;
      }
    });
  };

  const nextCode = () => {
    setGifNum((prevNum) => {
      if (prevNum === 3) {
        return 1;
      } else {
        return prevNum + 1;
      }
    });
  };

  useEffect(() => {
    switch (gifNum) {
      case 1:
        setDefaultGif(Neon);
        setDefaultText(neonText);
        setDefaultHeader(neonHeader);
        break;
      case 2:
        setDefaultGif(Law);
        setDefaultText(lawText);
        setDefaultHeader(lawHeader);
        break;
      case 3:
        setDefaultGif(Tetris);
        setDefaultText(tetrisText);
        setDefaultHeader(tetrisHeader);
        break;
      default:
        break;
    }
  }, [gifNum]);

  return (
    <>
      <div className='code-info'>
        <div className='code-main'>
          <div className={isMobileWidth ? 'code-mobile-split' : 'code-main-split'}>
            {isMobileWidth ? (
              ''
            ) : (
              <div className='code-main-nav'>
                <ul>
                  <li>
                    <button className='width-50' onClick={switchToNeonCity}>
                      Neon City
                    </button>
                  </li>
                  <li>
                    <button className='width-45' onClick={switchToLaw}>
                      Succession Calc
                    </button>
                  </li>
                  <li>
                    <button className='width-40' onClick={switchToTetris}>
                      Tetris
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <div className='code-main-screen'>
              <div className='code-main-screen-laptop'>
                <img className='laptop' src={Laptop} alt='laptop' />
                <img className='gif' src={defaultGif} alt='gif' onClick={() => openProject(defaultGif)}/>
                <div className='arrows'>
                  <div onClick={previousCode}></div>
                  <div onClick={nextCode}></div>
                </div>
              </div>
            </div>

            <div className='code-main-text'>
              <div className='code-main-text-screen'>
                <h3>{defaultHeader}</h3>
                <p>{defaultText}</p>
              </div>
            </div>
          </div>
        </div>
        

        <div className='code-skills'>
              <h3>Code Skills</h3>
              <div className='code-images'>
                  <img src={Html} alt='html.png' />
                  <img src={Css} alt='css.png' />
                  <img src={Javascript} alt='js.png' />
                  <img src={Sass} alt='sass.png' />
                  <img src={ReactLogo} alt='react.png' />
                  <img src={Bootstrap} alt='bootstrap.png' />
              </div>
        </div>
            
      </div>
    </>
  );
}

export default Projects;

const neonHeader = 'Neon City';
const neonText = 'Neon City is a project that I am currently working on in React. You arrive in a retro city and listen to Synthwave radio.';

const lawHeader = 'Succession Calc';
const lawText =
  'The Succession Calculator is a unique combination of code and law. It automatically resolves succession matters in Bosnia and Herzegovina, eliminating the need for a lawyer.';

const tetrisHeader = 'Tetris';
const tetrisText =
  'Tetris was my first full project that I created using vanilla JS. I had a lot of fun writing algorithms for it, and I approached it in a slightly different way than the typical implementation.';
