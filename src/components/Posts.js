import React, { Component } from 'react';
import axios from 'axios';
import PostsDisplay from './PostsDisplay';

class Posts extends Component {
  state = { postList: [] };

  componentDidMount () {

    // const cachedHits = localStorage.getItem(value);
    // if (cachedHits) {
    //   this.setState({ hits: JSON.parse(cachedHits) });
    //   return;
    // }
    //
    // fetch('https://hn.algolia.com/api/v1/search?query=' + value)
    //   .then(response => response.json())
    //   .then(result => this.onSetResult(result, value));
    //
    // onSetResult = (result, key) => {
    //   localStorage.setItem(key, JSON.stringify(result.hits));
    //   this.setState({ hits: result.hits });
    // }


    const cachedHits = localStorage.getItem('postList');
    if (cachedHits) {
      this.setState({ postList: JSON.parse(cachedHits) });
      //return;
      //console.log(JSON.parse(cachedHits));
    } else {
      const dataAPI = 'https://jsonplaceholder.typicode.com';
      axios.get(dataAPI + '/posts')
        .then((response) => {
          this.setState({
            postList: response.data
          });
          localStorage.setItem('postList', JSON.stringify(response.data));
          console.log(response.data);
        })
        .catch( (error) => {
          console.log(error);
        }
      );
    }
  }

  // onSetResult = (result, key) => {
  //   localStorage.setItem(key, JSON.stringify(result.hits));
  //   this.setState({ hits: result.hits });
  // }

  render() {
    return (
      <div>
        <PostsDisplay {...this.state} />
      </div>
    );
  }
}

export default Posts;
