var USER_DATA = {
  name: 'Kara Satish Kumar',
  username: 'karasatishkumar',
  image: 'https://avatars2.githubusercontent.com/u/2779223?v=3&u=a529006aba5f6298367e375cc25a954497b1244f&s=400'
}

var React = require('react');
var ReactDOM = require('react-dom');

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));