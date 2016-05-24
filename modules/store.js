import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux' // only needed if using react-router
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index'

// this default data normally comes from a server...
const defaultState = {
  tweets: [
    {
      id: 1,
      tweet: 'Hello World',
      author: 'Dave'
    },
    {
      id: 2,
      tweet: 'Hold the door',
      author: 'Bran'
    },
    {
      id: 3,
      tweet: 'Polymer or bust',
      author: 'Google devs'
    }
  ]
}
// enhancers is the middleware we will be using here.
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
  )
// store only needs rootReducer, but we can add more as desired(default state, middleware)
const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
