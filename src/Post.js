import React, { Component } from 'react';
import axios from 'axios';
import { shape } from 'prop-types';
import PostDisplay from './PostDisplay';

class Post extends Component {
  state = { currentPost: "" };

  componentDidMount () {
    const {location} = this.props
    const splitOnject = location.pathname.lastIndexOf('/');
    const pageId = location.pathname.substring(splitOnject + 1);
    console.log(pageId);

    const dataAPI = 'https://jsonplaceholder.typicode.com';
    axios.get(dataAPI + '/posts/' + pageId)
      .then((response) => {
        this.setState({
          currentPost: response.data
        });
        console.log(response.data);
      })
      .catch( (error) => {
        console.log(error);
      }
    );
    console.log('in Post');
  }

  render() {
    const { currentPost } = this.state;
    if (!currentPost) return (
      <div>Loading</div>
    )
    return (
      <div>
        <PostDisplay {...currentPost} />
      </div>
    );
  }
}

Post.propTypes = {
  location: shape({}),
};

export default Post;
