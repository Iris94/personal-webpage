import React, { useState, useEffect } from 'react';
import './projects.css';
import Neon from '../../assets/neon.gif';
import Law from '../../assets/law.gif';
import Tetris from '../../assets/tetris.gif';
import Laptop from '../../assets/laptop.png';
import xPravnik from '../../assets/gif2.gif'
import { FaHtml5, FaCss3, FaJs, FaReact, FaSass  } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiBootstrap, SiGithub } from 'react-icons/si'


function Projects() {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [defaultGif, setDefaultGif] = useState(xPravnik);
  const [defaultText, setDefaultText] = useState(pravnikText);
  const [defaultHeader, setDefaultHeader] = useState(pravnikHeader);
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
      case xPravnik:
          url = 'https://x-pravnik-iris94.vercel.app/'
        break;
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

  const switchToXPravnik = () => {
    setDefaultGif(xPravnik)
    setDefaultText(pravnikText)
    setDefaultHeader(pravnikHeader)
    setGifNum(1)
  }

  const switchToNeonCity = () => {
    setDefaultGif(Neon);
    setDefaultText(neonText);
    setDefaultHeader(neonHeader);
    setGifNum(2);
  };

  const switchToLaw = () => {
    setDefaultGif(Law);
    setDefaultText(lawText);
    setDefaultHeader(lawHeader);
    setGifNum(3);
  };

  const switchToTetris = () => {
    setDefaultGif(Tetris);
    setDefaultText(tetrisText);
    setDefaultHeader(tetrisHeader);
    setGifNum(4);
  };

  const previousCode = () => {
    setGifNum((prevNum) => {
      if (prevNum === 1) {
        return 4;
      } else {
        return prevNum - 1;
      }
    });
  };

  const nextCode = () => {
    setGifNum((prevNum) => {
      if (prevNum === 4) {
        return 1;
      } else {
        return prevNum + 1;
      }
    });
  };

  useEffect(() => {
    switch (gifNum) {
      case 1:
        setDefaultGif(xPravnik)
        setDefaultText(pravnikText)
        setDefaultHeader(pravnikHeader)
        break;
      case 2:
        setDefaultGif(Neon);
        setDefaultText(neonText);
        setDefaultHeader(neonHeader);
        break;
      case 3:
        setDefaultGif(Law);
        setDefaultText(lawText);
        setDefaultHeader(lawHeader);
        break;
      case 4:
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
                    <button className='width-50' onClick={switchToXPravnik}>
                      xPravnik
                    </button>
                  </li>
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
                <div className='skill-div'>
                  <FaHtml5 className='skill-icon'/>
                  <p>HTML</p>
                </div>
                <div className='skill-div'>
                  <FaCss3 className='skill-icon' />
                  <p>CSS</p>
                </div>
                <div className='skill-div'>
                  <FaJs className='skill-icon' />
                  <p>Javascript</p>
                </div>
                <div className='skill-div'>
                  <FaReact className='skill-icon' />
                  <p>React</p>
                </div>
                <div className='skill-div'>
                  <FaSass className='skill-icon' />
                  <p>SASS</p>
                </div>
                <div className='skill-div'>
                  <SiBootstrap className='skill-icon' />
                  <p>Bootstrap</p>
                </div>
                <div className='skill-div'>
                  <SiGithub className='skill-icon' />
                  <p>Github</p>
                </div>
                <div className='skill-div'>
                  <SiNextdotjs className='skill-icon' />
                  <p>Next</p>
                </div>
                <div className='skill-div'>
                  <SiTailwindcss className='skill-icon' />
                  <p>Tailwind</p>
                </div>
              </div>
        </div>
            
      </div>
    </>
  );
}

export default Projects;

const pravnikHeader = 'xPravnik'
const pravnikText = `XPravnik is my latest and proudest project. It automatically writes judicial documents for you, and it works for every country in the former Yugoslavia. It's one of a kind and solves a significant problem for citizens, as they no longer need lawyers with this.`

const neonHeader = 'Neon City';
const neonText = 'Neon City is a project that I am currently working on in React. You arrive in a retro city and listen to Synthwave radio.';

const lawHeader = 'Succession Calc';
const lawText =
  'The Succession Calculator is a unique combination of code and law. It automatically resolves succession matters in Bosnia and Herzegovina, eliminating the need for a lawyer.';

const tetrisHeader = 'Tetris';
const tetrisText =
  'Tetris was my first full project that I created using vanilla JS. I had a lot of fun writing algorithms for it, and I approached it in a slightly different way than the typical implementation.';
