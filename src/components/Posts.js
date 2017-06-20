import React, { Component } from 'react';
import axios from 'axios';
import PostsDisplay from './PostsDisplay';

class Posts extends Component {
  state = { postList: [] };

  componentDidMount () {
    const dataAPI = 'https://jsonplaceholder.typicode.com';
    axios.get(dataAPI + '/posts')
      .then((response) => {
        this.setState({
          postList: response.data
        });
      })
      .catch( (error) => {
        console.log(error);
      }
    );

    console.log('in Posts');
  }

  render() {
    return (
      <div>
        <PostsDisplay {...this.state} />
      </div>
    );
  }
}

export default Posts;
