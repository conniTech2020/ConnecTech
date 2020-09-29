import Axios from "axios";
import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import * as style from "./Search.module.css";
import { getAllGuides } from "../../api/index";
// import { ListItemAvatar } from '@material-ui/core';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filterItems: [],
      country: "",
      city: "",
      cost: "",
      start_date: "",
      end_date: "",
      Language: "" /*להוסיף שיהיה מערך */,
      searchResult: [],
    };
  }

  componentDidMount = async () => {
    await getAllGuides().then((res) => {
      this.setState({ items: res.data.data });
    });
  };

  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  getSearchResult = (event) => {
    const change = this.state.items.filter((item) => {
      return (
        item.country === this.state.country &&
        item.city === this.state.city &&
        item.cost === this.state.cost
      );
    });
    this.setState({ filterItems: change });
  };

  render() {
    return (
      <div className={style.searchContainer}>
        <Form onClick={this.getSearchResult}>
          <FormControl
            name="country"
            type="text"
            onChange={this.changeHandler}
            placeholder="country"
          />
          <FormControl
            name="city"
            type="text"
            onChange={this.changeHandler}
            placeholder="city"
          />
          <FormControl
            name="cost"
            type="number"
            onChange={this.changeHandler}
            placeholder="price"
          />
          <FormControl
            name="start_date"
            type="date"
            onChange={this.changeHandler}
            placeholder="startDate"
          />
          <FormControl
            name="end_date"
            type="date"
            onChange={this.changeHandler}
            placeholder="endDate"
          />
          <FormControl
            name="Language"
            type="text"
            onChange={this.changeHandler}
            placeholder="Language"
          />
          <Button onClick={this.getSearchResult} /*href={'/allguides'} */>
            Search
          </Button>
        </Form>
        <div className={style.searchContainer}>
          {this.state.filterItems.map((item) => {
            return (
              <div>
                {item.country}
                {item.city}
                {item.cost}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Search;
