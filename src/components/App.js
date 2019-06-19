import React from 'react';
import PropTypes from 'prop-types'

//components
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  // const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     test: 42
  //   };
  // }

  state = {
    pageHeader: 'Naming Contests 123'
  };

  componentDidMount() {
    console.log('did mount');
    // debugger;
  }

  componentWillUnmount() {
    console.log('will unmount');
    // debugger;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
            {/* passed in from index.js */}
            {this.props.contests.map(contest => 
              <ContestPreview {...contest} />
              )}
        </div>
      </div>
    )
  };
}

// const App = () => {


export default App;