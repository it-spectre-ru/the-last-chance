import { call, put } from 'redux-saga/effects'
import { log } from 'Utils/Log'

import MainActions from 'Stores/MainStore'

export function * startup (api) {
  // your stuff
  const testApi = yield call(api.getRepos, 'it-spectre-ru')
  if (testApi.ok) {
    yield put(MainActions.updateStore({ repos: testApi.data }))
  }
  log({ testApi })
}
