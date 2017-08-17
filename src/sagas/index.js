import * as actions from '../actions';
import { call, put, takeEvery } from 'redux-saga/effects';

const fetchUsers = () =>
  fetch('https://swapi.co/api/people')
    .then(r => r.json())
    .then(data => ({ results: data.results }))
    .catch(err => ({ error: 'Error fetching users' }));

function* loadPeopleWorker(action) {
  yield put(actions.loadPeopleStarted());

  const { results, error } = yield call(fetchUsers);

  console.log(results);

  if (error) {
    return yield put(actions.loadPeopleError(error));
  }

  yield put(actions.loadPeopleSuccess(results));
}

function* loadPeopleWatcher() {
  yield takeEvery('LOAD_PEOPLE', loadPeopleWorker);
}

export default loadPeopleWatcher;
