const React = require('react');
const preloadImage = require('../util/preloadImage.js');
const BirdMedia = require('./BirdMedia');

let clickDelay = null;

const BirdUI = React.createClass({
    propTypes: {
        birdData: React.PropTypes.shape({
            audio: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
            images: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
            birdName: React.PropTypes.string.isRequired,
        }),
        onImageLoad: React.PropTypes.func,
    },

    getInitialState() {
        return { 
            audioSrcIndex: 0,
            imageSrcIndex: 0,
        };
    },

    getNextAudio() {
        if (this.state.audioSrcIndex >= this.props.birdData.audio.length) {
            return 0;
        } else {
            return this.state.audioSrcIndex + 1;
        }
    },

    getNextImage() {
        if (this.state.imageSrcIndex >= this.props.birdData.images.length) {
            return 0;
        } else {
            return this.state.imageSrcIndex + 1;
        }
    },    

    handleClick(event) {
        event.preventDefault();
        if (!!clickDelay) {
            return;
        }
        this.setState({
            audioSrcIndex: this.getNextAudio(),
            imageSrcIndex: this.getNextImage(),
        });
        clickDelay = window.setTimeout(()=> {
            clickDelay = null;
        }, 500);
    },

    getCurrentImage() {
        if (this.props.birdData.images.length) {
            return this.props.birdData.images[this.state.imageSrcIndex];
        } else {
            return null;
        }
    },

    getCurrentAudio() {
        if (this.props.birdData.audio.length) {
            return this.props.birdData.audio[this.state.audioSrcIndex];
        } else {
            return null;
        }
    },

    render() {
        if (!this.props.birdData) {
            return null;
        }
        return (
            <div>
                <h2 className="center">{this.props.birdData.birdName}</h2>
                 <BirdMedia
                    onImageLoad={this.props.onImageLoad}
                    name={this.props.birdData.birdName}
                    imageSrc={this.getCurrentImage()}
                    audioSrc={this.getCurrentAudio()}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
});

module.exports = BirdUI;
