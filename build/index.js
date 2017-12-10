var person = {
  name: 'Danube Phan',
  location: 'San Francisco, CA',
  occupation: {
    title: 'Front End Engineer',
    employer: '@acoolstartup'
  },
  photo: './images/watercolor.jpg',
  updates: [{
    platform: 'twitter',
    status: 'I\'m happy, hope you\'re happy too!'
  }, {
    platform: 'twitter',
    status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
  }, {
    platform: 'twitter',
    status: 'Fear makes the wolf look bigger'
  }, {
    platform: 'facebook',
    status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
  }]
};

//In JSX, class needs to be className because class is a reserved word in JS
//Every component will be a class
//Extends makes a subclass of react component object. Building on top of the library/framework

//Card Component
class Card extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(Photo, { photo: person.photo }),
      React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
      React.createElement(Updates, { updates: person.updates })
    );
  }
}

//Photo component
class Photo extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'photo' },
      React.createElement('img', { src: this.props.photo, alt: 'Photo' })
    );
  }
}

//Bio Component
class Bio extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'h1',
        { className: 'name' },
        this.props.name
      ),
      React.createElement(
        'h2',
        { className: 'location' },
        this.props.location
      ),
      React.createElement(
        'div',
        { className: 'occupation' },
        React.createElement(
          'p',
          null,
          this.props.occupation.title,
          ' at ',
          this.props.occupation.employer
        )
      )
    );
  }
}

//Updates Component
class Updates extends React.Component {

  updates() {
    return this.props.updates.map(function (update, index) {
      return React.createElement(
        'li',
        { className: "update " + update.platform, key: index },
        update.status
      );
    });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'updates' },
      React.createElement(
        'ul',
        null,
        this.updates()
      )
    );
  }
}

ReactDOM.render(
//Can create a new tag that can be reused to create a new card
React.createElement(Card, null), document.getElementById('app'));