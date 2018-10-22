const CatRotate = React.createClass({

  getInitialState() {
    return {
      imageSide: false,
    };
  },

  handleChange(e) {
      this.setState({ imageSide: !this.state.imageSide });
  },

  render() {
    return (
      <div
          className={this.state.imageSide ? 'frontSide' : 'backSide'}
          onClick={this.handleChange}
        />
    );
  }
});

ReactDOM.render(
    <CatRotate/>,
  document.getElementById('container')
)