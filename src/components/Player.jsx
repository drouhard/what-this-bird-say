const React = require('react');

const Player = React.createClass({
    propTypes: {
        onEnded: React.PropTypes.func,
        onError: React.PropTypes.func,
        onPlay: React.PropTypes.func,
        src: React.PropTypes.string,
    },

    getPlayerRef(ref) {
        this._ref = ref;
    },

    componentDidUpdate() {
        this._ref.play();
    },

    componentDidMount() {
        this._ref.play();
    },

    render() {
        if (!this.props.src) {
            return null;
        }

        return (
            <audio
                preload="auto"
                src={this.props.src || ""}
                ref={(ref) => this.getPlayerRef(ref)}
            >
                <p>Unfortunately, this site was not made to support your browser.</p>
            </audio>
        );
    }
});

module.exports = Player;
