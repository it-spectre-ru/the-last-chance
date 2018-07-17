import { call } from 'redux-saga/effects'
import { log } from 'Utils/Log'

export function * startup (api) {
  // your stuff
  const testApi = yield call(api.getRepos, 'it-spectre-ru')
  log({ testApi })
}
