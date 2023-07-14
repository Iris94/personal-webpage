import React, {useEffect, useState} from 'react';
import './background.css'

const Background = () => {
  const [animatedElements, setAnimatedElements] = useState([]);

  const tessaElementsNum = 33;
  const tessaElements = Array.from({length: tessaElementsNum}, (_, index) => (
    <div
     key={index} 
     className='hexagon' 
     ></div>
  ))

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 11) + 1;
      setAnimatedElements(prevElements => {
        if (prevElements.includes(randomIndex)) {
          return prevElements.filter(element => element !== randomIndex);
        } else {
          return [...prevElements, randomIndex];
        }
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
    <div className="elements">
      <div className='hex-grid'>{tessaElements}</div>
      <div className={`binary1 binary ${animatedElements.includes(1) ? 'binary-animation' : 'binary-fade-out'}`}>00000001</div>
      <div className={`binary2 binary ${animatedElements.includes(2) ? 'binary-animation' : 'binary-fade-out'}`}>00010001</div>
      <div className={`binary3 binary ${animatedElements.includes(3) ? 'binary-animation' : 'binary-fade-out'}`}>11111000010</div>
      <div className={`binary4 binary ${animatedElements.includes(4) ? 'binary-animation' : 'binary-fade-out'}`}>01101101</div>
      <div className={`binary5 binary ${animatedElements.includes(5) ? 'binary-animation' : 'binary-fade-out'}`}>01101001</div>
      <div className={`binary6 binary ${animatedElements.includes(6) ? 'binary-animation' : 'binary-fade-out'}`}>01110010</div>
      <div className={`binary7 binary ${animatedElements.includes(7) ? 'binary-animation' : 'binary-fade-out'}`}>01111010</div>
      <div className={`binary8 binary ${animatedElements.includes(8) ? 'binary-animation' : 'binary-fade-out'}`}>01100001</div>
      <div className={`binary9 binary ${animatedElements.includes(9) ? 'binary-animation' : 'binary-fade-out'}`}>01101000</div>
      <div className={`binary10 binary ${animatedElements.includes(10) ? 'binary-animation' : 'binary-fade-out'}`}>01101010</div>
      <div className={`binary11 binary ${animatedElements.includes(11) ? 'binary-animation' : 'binary-fade-out'}`}>01100011</div>
    </div>
    </>
  );
};

export default Background;
