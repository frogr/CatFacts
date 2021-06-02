import { Component } from 'react';
import axios from 'axios';

class catFact extends Component {
  state = {
    catFact: ""
  }

  componentDidMount() {
    axios.get("https://catfact.ninja/fact")
         .then(res => {
          this.setState({ catFact: res.data.fact })
         })
         .catch(err => {
           console.log(err)
         })
  }

  render () {
    return (
      <div>{this.state.catFact}</div>
    )
  }
}

export default catFact;