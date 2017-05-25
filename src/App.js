import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
var FontAwesome = require('react-fontawesome');

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="logo" src={require("./logo.png")} />
        </div>
        <Posts />
        <FontAwesome name='rocket' />
      </div>
    );

 }
}

class Posts extends React.Component{
  createPosts(posts) {
    return posts.map(function(o,i){
      <CommentList comments={o.comments} />
      return (<Post key={i} added={o.added} img={o.img} />)
    });
  }

  render() {
    return (
      <div>
        {this.createPosts(mockData.posts)}
      </div>
    );
  }
}

function Post(props) {
  return (
  <div className="App-post">
    <Picture img={props.img}> </Picture>
    <Comments added={props.added} comments={props.comments}>  </Comments>
  </div>
  );
}

function Picture(props) {
  return (
  <div className="App-picture">
      <img className="picture1" src={require(props.img)} alt=" " />
  </div>
  );
}

function Comments(props) {
  return (
  <div className="App-comments">
    <PostInfo added={props.added}> </PostInfo>
    <Commentbox comments={props.comments}>  </Commentbox>
  </div>
  );
}

function PostInfo(props) {
  return (
    <div className="App-info">
      <CommentTimestamp added={props.added}> </CommentTimestamp>
      <Bunnies> </Bunnies>
    </div>
  )
}

function CommentTimestamp(props) {
  return (
    <div className="App-commentTime">
      <p>Posted {props.added}</p>
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

class BunnyLogo extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'gray',
    };
  }

  handleClick() {
   var el = ReactDOM.findDOMNode(this);
   el.classList.toggle('button-active');
   this.setState({
     color: (this.state.color === 'gray') ? 'red' : 'gray',
   });
 }

  render() {
    return (
      <div className="App-bunnyLogo">
      <button className="heart button-nobg" onClick={() => this.handleClick()}
      style={{color:this.state.color}}>
      <FontAwesome name='heart-o' size='2x'/>
      </button>
      </div>
    );
  }
}

function BunnyCount() {
  return (
    <div className="App-bunnyCount">
    </div>
  );
}

function Commentbox(props) {
  return (
    <div className="App-commentBox">
      <CommentWrite> </CommentWrite>
    </div>
  );
}

function PostComment() {
  return (
  <div className="App-postComment2">

  </div>
  );
}

class CommentWrite extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }
  render() {
    return (

        <div className="App-writeComment">
          <CommentList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button className="button-nobg"><FontAwesome name='comment-o' size='2x' /></button>
            </form>

        </div>
    )
  }
    handleChange(e) {
      this.setState({text: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
}

class CommentList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

var mockData = {
	"posts": [{
			"id": 0,
			"added": "1.3.2017",
			"img": "./kittens.jpg",
			"comments": [{
					"id": 1,
					"comment": "Onpas kiva kisu"
				},
				{
					"id": 2,
					"comment": "No niinpäs on!"
				}
			]
		},
		{
			"id": 1,
			"added": "6.4.2017",
			"img": "./kitty.jpg",
			"comments": [{
					"id": 1,
					"comment": "Onpas kiva pupu"
				},
				{
					"id": 2,
					"comment": "Eikö!"
				}
			]
		}
	]
};

export default App;
