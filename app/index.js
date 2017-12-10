var person = {
  name: 'Danube Phan',
  location: 'San Francisco, CA',
  occupation: {
    title: 'Front End Engineer',
    employer: '@acoolstartup'
  },
  photo: './images/watercolor.jpg',
  updates: [
    {
      platform: 'twitter',
      status: 'I\'m happy, hope you\'re happy too!'
    },
    {
      platform: 'twitter',
      status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
    },
    {
      platform: 'twitter',
      status: 'Fear makes the wolf look bigger'
    },
    {
      platform: 'facebook',
      status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
    }
  ]
};

//In JSX, class needs to be className because class is a reserved word in JS
//Every component will be a class
//Extends makes a subclass of react component object. Building on top of the library/framework

//Card Component
class Card extends React.Component {
  render() {
    return(
      <div className="card">
        <Photo photo={person.photo}/>
        <Bio name={person.name} location={person.location} occupation={person.occupation}/>
        <Updates updates={person.updates}/>
      </div>
    )
  }
}

//Photo component
class Photo extends React.Component {
  render() {
    return (
      <div className="photo">
        <img src={this.props.photo} alt="Photo" />
      </div>
    )
  }
}

//Bio Component
class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <h1 className="name">{this.props.name}</h1>
        <h2 className="location">{this.props.location}</h2>
        <div className="occupation">
          <p>{this.props.occupation.title} at {this.props.occupation.employer}</p>
        </div>
      </div>
    )
  }
}

//Updates Component
class Updates extends React.Component {

  updates() {
    return this.props.updates.map(function (update, index) {
      return (
        <li className={"update " + update.platform} key={index}>
          {update.status}
        </li>
      )
    });
  }

  render() {
    return (
      <div className="updates">
        <ul>
          {this.updates()}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  //Can create a new tag that can be reused to create a new card
  <Card />,
  document.getElementById('app')
);
