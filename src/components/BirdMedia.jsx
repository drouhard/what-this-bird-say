const React = require('react');
const Player = require('./Player');

const BirdMedia = React.createClass({
    propTypes: {
        audioSrc: React.PropTypes.string,
        handleClick: React.PropTypes.func,
        imageSrc: React.PropTypes.string.isRequired,
        onImageLoad: React.PropTypes.func,
    },

    playerRef(ref) {
        this._playerRef = ref;
    },

    renderPlayer() {
        if (this.props.audioSrc) {
            return (<Player
                        src={this.props.audioSrc}
                        ref={(ref) => this.playerRef(ref)}
                    />);
        }
    },

    render() {
        return (
            <article className="grid-item" onClick={this.props.handleClick}>
                <img src={this.props.imageSrc} onLoad={this.props.onImageLoad} />
                {this.renderPlayer()}
            </article>
        );
    }
});

module.exports = BirdMedia;
