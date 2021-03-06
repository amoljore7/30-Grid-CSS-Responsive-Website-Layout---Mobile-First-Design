import React, { Component } from "react";
import './App.css';
import card from './asset/card1.jpg';
import marketing from './asset/marketing.jpg';
import mobile from './asset/mobile.jpg';


class App extends Component {

  render() {
    return (
      <body>
    
      <header id="showcase" class="grid">
          <div class="bg-image"></div>
          <div class="content-wrap">
              <h1>Welcome To gsLab</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ullam eius sed sequi iure architecto iste
                  deserunt provident nisi unde.</p>
              <a href="#section-b" class="btn">Read More</a>
          </div>
      </header>
  
     
      <main id="main">
          <section id="section-a" class="grid">
              <div class="content-wrap">
                  <h2 class="cotentent-title">Web & Application Development</h2>
                  <div class="content-text">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem iusto aliquam odio
                          asperiores debitis vel eligendi perspiciatis. Cupiditate sed unde vitae eveniet? Possimus,
                          accusantium quasi. Sed fuga, odit eum quae dicta ipsa cupiditate eaque quam nulla? Aliquid,
                          debitis
                          ex!</p>
                  </div>
              </div>
          </section>
  
       
          <section id="section-b" class="grid">
              <ul>
                  <li>
                      <div class="card">
                          <img src={card} alt="" />
                          <div class="card-content">
                              <h3 class="card-title">Web Development</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum itaque eum sed
                                  animi voluptatibus a dolor quam laudantium natus.</p>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="card">
                          <img src={mobile} alt="" />
                          <div class="card-content">
                              <h3 class="card-title">Mobile Applications</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum itaque eum sed
                                  animi voluptatibus a dolor quam laudantium natus.</p>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="card">
                          <img src={marketing} alt="" />
                          <div class="card-content">
                              <h3 class="card-title">Tech Marketing</h3>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rerum itaque eum sed
                                  animi voluptatibus a dolor quam laudantium natus.</p>
                          </div>
                      </div>
                  </li>
              </ul>
          </section>
  
     
          <section id="section-c" class="grid">
              <div class="content-wrap">
                  <h2 class="content-title">We handle all of your digital needs</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis asperiores aliquid hic saepe
                      inventore blanditiis cupiditate ipsa iusto harum!</p>
              </div>
          </section>
  
          <section id="section-d" class="grid">
              <div class="box">
                  <h2 class="content-title">Contact US</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum consequuntur, dignissimos
                      porro adipisci dolores culpa cum magni quasi rerum.</p>
                  <p>amoljore7@gmail.com</p>
                  <span>+91 8421431331</span>
              </div>
              <div class="box">
                  <h2 class="content-title">About Our Company</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nihil ad sed quasi blanditiis aut
                      accusantium adipisci deserunt! Deserunt ullam similique praesentium commodi at iure quasi iste,
                      maxime reiciendis possimus.</p>
              </div>
          </section>
      </main>
  
   
      <footer id="main-footer" class="grid">
          <div>Amol Tech World</div>
          <div>project by : <a
                  href="https://github.com/amoljore7/30-Grid-CSS-Responsive-Website-Layout---Mobile-First-Design"
                  target="_blank">Amol Jore</a></div>
      </footer>
  </body>
    );
  }
}

export default (App);

