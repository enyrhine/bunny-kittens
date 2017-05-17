import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Bunny Kittens</h1>
        </div>

        <Post> </Post>
        <p className="App-intro">
        {/* <img src={} />  */}
        </p>
      </div>
    );
  }
}

function Post() {
  return (
  <div className="App-post">
    <Picture> </Picture>
    <Comments>  </Comments>
  </div>
  );
}

function Picture() {
  return (
  <div className="App-picture">
    <h2>Picture</h2>
  </div>
  );
}

function Comments() {
  return (
  <div className="App-comments">
    <PostInfo> </PostInfo>
    <Commentbox> </Commentbox>
  </div>
  );
}

function PostInfo() {
  return (
    <div className="App-info">
      <CommentTimestamp> </CommentTimestamp>
      <Bunnies> </Bunnies>
    </div>
  )
}

function CommentTimestamp() {
  return (
    <div className="App-commentTime">
      <p>Date {new Date().toLocaleTimeString()}.</p>
    </div>
  );
}

function Bunnies() {
  return (
    <div className="App-bunnies">
      <BunnyLogo> </BunnyLogo>
      <BunnyCount> </BunnyCount>
    </div>
 );
}

function BunnyLogo() {
  return (
    <div className="App-bunnyLogo">
      <p>Bunnies!</p>
    </div>
  );
}

function BunnyCount() {
  return (
    <div className="App-bunnyCount">
    </div>
  );
}

function Commentbox() {
  return (
    <div className="App-commentBox">
      <WriteComment> </WriteComment>
      <PostComment> </PostComment>
    </div>
  );
}

function WriteComment() {
  return (
  <div className="App-writeComment">
  <p>Write a comment</p>
  </div>
  );
}

function PostComment() {
  return (
  <div className="App-postComment">
  <p>Post</p>
  </div>
  );
}


export default App;
