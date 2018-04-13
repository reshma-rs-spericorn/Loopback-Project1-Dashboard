import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col s12 m6">
            <div class="card cyan lighten-4">
              <div class="card-content cyan-text">
                <span class="card-title">Project 1</span>
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card  lime lighten-4">
              <div class="card-content lime-text">
                <span class="card-title">Project 2</span>
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey lighten-4">
              <div class="card-content blue-grey-text">
                <span class="card-title">Project 3</span>
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card deep-orange lighten-4">
              <div class="card-content deep-orange-text">
                <span class="card-title">Project 4</span>
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;