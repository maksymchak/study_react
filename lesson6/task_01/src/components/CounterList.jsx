
export default class CounterList extends Component {
  render() {
    return (
      <div>
        {
          this.props.counters.map(el =>
            <Counter
              key={el.id}
              id={el.id}
              count={el.count}
              
            />
          )        
        } 
      </div>
    );
  }
}