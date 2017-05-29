import React, { Component } from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';
import { fetchPuppyGifs } from '../actions/getPuppyGifs';

class App extends Component {

  componentDidMount() {
    this.props.fetchPuppyGifs();
  }

  render(){
    let puppies = this.props.puppies.map(puppy => {
      return(
        <GifsTemp
          key={puppy.id}
          puppy={puppy}
        />
      )
    })
    return(
      <div>
        {puppies}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    puppies: state.puppies
  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchPuppyGifs: () => {
      dispatch(fetchPuppyGifs())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
