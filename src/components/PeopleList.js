import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PeopleList extends Component {
  render() {
    const { status, error, people, actions } = this.props;

    return (
      <div className="App">
        <p className="App-intro">
          <button onClick={() => actions.loadPeople()}>Load People List</button>
        </p>
        <div>
          {status === 'pending' && <span>Loading....</span>}

          {status === 'error' &&
            <span>
              Error: {error}
            </span>}

          {status === 'success' &&
            <ul>
              {people.map(character =>
                <li>
                  {character.name}
                </li>
              )}
            </ul>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  people: state.people,
  status: state.status,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
