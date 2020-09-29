class AllGuides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount = async () => {
    await getAllGuides().then((res) => {
      this.setState({ items: res.data.data });
    });
  };
  render() {
    return (
      <div>
        {this.state.items.map((item) => {
          return (
            <div>
              {item.first_name}
              {item.last_name}
              {item.country}
              {item.city}
              {item.cost}
              {item.start_date}
              {item.Language}
            </div>
          );
        })}
      </div>
    );
  }
}
export default AllGuides;
