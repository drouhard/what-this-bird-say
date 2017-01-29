'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');
const shuffle = require('lodash.shuffle');
const Spinner = require('react-spinner');

const BirdUI = require('./components/BirdUI');
const mountPoint = document.getElementById('mount');

const apiURLRoot = 'https://what-this-bird-say.herokuapp.com';

const Interface = React.createClass({
  getInitialState() {
    return {
      birdData: null,
      isLoading: false,
    }
  },

  onImageLoad() {
    this.setState({
      isLoading: false,
    })
  },

  handleSubmit(event) {
    event.preventDefault();
    this.setState({isLoading: true});
    
    const birdName = this.searchInput.value;
    const query = encodeURI(birdName);
    
    request.get(`${apiURLRoot}/api/bird/${query}`).end((err, res) => {
      if (err || (res.status !== 200)) {
          // TODO: flesh out error handling
          console.log('error');
      } else {
        this.setState({
            birdData: {
              birdName: birdName,
              images: shuffle(res.body.imgArray),
              audio: shuffle(res.body.audioArray),
            }
        });
      }
    });
  },

  spinIfLoading() {
    if (this.state.isLoading) {
      return (<div className="spinner-wrapper"><Spinner /></div>);
    }
  },

  render() {
    if (this.state.birdData) {
      return (
        <div>
          <BirdUI onImageLoad={this.onImageLoad} birdData={this.state.birdData}/>
          {this.spinIfLoading()}
        </div>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="form">
          <input 
            type="text" name="birdSearch" id="birdSearch" 
            aria-label="Enter a bird species to search for"
            ref={(input) => { this.searchInput = input; }}
            className="font-headline input"
          />
          <button type="button" name="button" id="searchButton" onClick={this.handleSubmit} className="font-headline button--search">
          🐦
          </button>
          {this.spinIfLoading()}
        </form>
      );
    }
  }
});

ReactDOM.render(
  <Interface/>, mount);
