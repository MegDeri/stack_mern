import React from 'react';

class App extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res });
    });
  }
  
  render () {
    return (
      <div>
        Hello world!
      </div>
    );
  }
}
  

export default App;
