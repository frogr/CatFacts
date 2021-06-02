import axios from 'axios';
import { Component } from 'react';

export default class CatPic extends Component {
  state = {
    CatPicURL: ""
  }
  componentDidMount() {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=1&page=10&order=Rand")
         .then(res => {
          this.setState({CatPicURL: res.data[0].url})
         })
  }
  render() {
    return(
      <div>
        <img className="catPic" src={this.state.CatPicURL} alt="Its just a random cat" />
      </div>
    )
  }
}