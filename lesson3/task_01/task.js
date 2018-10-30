const Clicker = React.createClass({

    getInitialState() {
        return {
            size: 50
        };
    },

    handleClick() {
        
        if (this.state.size < 200) {
            this.setState({ size: this.state.size + 20 });    
        } else {
            this.setState({ size: this.state.size = 50 });
        }
    },

    render() {
        const { size } = this.state;

        return (
            <div
                className="circle"
                style={{width: size, height: size}}
                onClick={this.handleClick}
                >
            </div>
        );
    }
});

ReactDOM.render(
    <Clicker/>,
    document.getElementById('root')
);