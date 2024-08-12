// import React from "react";
// import AppHeader from "./Header";
// import './Home.css';
// import pride from './../../assets/pride.png' ;
// const Home = () => {
// return (
//     <div> 
//     <AppHeader/>
//     <section className="numbers"> 
//         <div className="container">
//          <div className="row">
//            <div className="col-md-3"> 
//              <h2>1287+</h2>
//              <h6> SAVINGS</h6>
//            </div>
//            <div className="col-md-3"> 
//              <h2> 5786+</h2>
//              <h6>PHOTOS </h6>
//            </div>
//            <div className="col-md-3"> 
//              <h2>1440+ </h2>
//              <h6> ROCKETS</h6>
//            </div>
//            <div className="col-md-3"> 
//              <h2> 7110+</h2>
//              <h6>GLOBES </h6>
//            </div>
//          </div>
//         </div>
//     </section>
//     <section className="pride"> 
//         <div className="container"> 
//         <div className="row">
//             <div className="col-md-6">
//               <img src={pride} title ="prideimg" /> 
//             </div>
//             <div className="col-md-6"> 
//                <h2>We pride ourselves on making real food from the best ingredients. </h2>
//                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>
//                <button> <a href="#"> Learn More</a></button>
//             </div>
//         </div>
//         </div>

//     </section>
//     </div>  
// )
// }
// export default Home ;

import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
import AppHeader from './Header';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pride from './../../assets/pride.png';
import ingredients from './../../assets/ingredients.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const savingsRef = useRef(null);
  const photosRef = useRef(null);
  const rocketsRef = useRef(null);
  const globesRef = useRef(null);

  useEffect(() => {
    const savingsCountUp = new CountUp(savingsRef.current, 1287);
    const photosCountUp = new CountUp(photosRef.current, 5786);
    const rocketsCountUp = new CountUp(rocketsRef.current, 1440);
    const globesCountUp = new CountUp(globesRef.current, 7110);

    if (!savingsCountUp.error) savingsCountUp.start();
    if (!photosCountUp.error) photosCountUp.start();
    if (!rocketsCountUp.error) rocketsCountUp.start();
    if (!globesCountUp.error) globesCountUp.start();
  }, []);

  return (
    <div>
      <AppHeader />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 ref={savingsRef}>0</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2 ref={photosRef}>0</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2 ref={rocketsRef}>0</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2 ref={globesRef}>0</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={pride} title="prideimg" alt="pride" />
            </div>
            <div className="col-md-6">
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <button><a href="#">Learn More</a></button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>We make everything by hand with the best possible ingredients. </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
              <ul>
                <li><FontAwesomeIcon icon={faCheck} className="icon-check" /> Etiam sed dolor ac diam volutpat.</li>
                <li><FontAwesomeIcon icon={faCheck} className="icon-check"/> Erat volutpat aliquet imperdiet.</li>
                <li><FontAwesomeIcon icon={faCheck} className="icon-check"/> Purus a odio finibus bibendum.</li>
              </ul>
              <button>
                <a href="#">Learn More</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={ingredients} alt="ingredients" />
            </div>
          </div>
        </div>
      </section>
      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12"> 
              <h2>When a man's stomach is full it makes no
              difference whether he is rich or poor. </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                 finibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>
                 <a href="#">Watch Our Story</a>
            </div>
           </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
