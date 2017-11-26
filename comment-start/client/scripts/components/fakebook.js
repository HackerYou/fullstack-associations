import React from 'react';
import Post from './post';

class Fakebook extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
    this.refresh = this.refresh.bind(this);
  }

  render() {
    return <div>
      <div className='header'>
        <h1>fakebook</h1>
      </div>

      { this.state.posts.map(post => {
        return <Post key={ post._id } { ...post } />
      })}
    </div>;
  }

  refresh() {
    fetch('/api/posts')
    .then(res => res.json())
    .then(posts => this.setState({ posts }))
  }

  componentDidMount() {
    this.refresh();
  }
}

export default Fakebook;