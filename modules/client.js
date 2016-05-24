import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from '../modules/routes'
import { Provider } from 'react-redux'
import store, { history } from './store'
// export default doesn't need { brackets }, plain export does need { brackets }
// 'app' refers to app in components/Document.js'
// when not using redux it is browserHistory, when using redux, just history...
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
)

