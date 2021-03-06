import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { HashRouter , Route, Switch } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'

import Landing from './pages/landing'
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'

import Loading from './components/loading'


import { logUser, logOut } from './actions'

import reducer from './reducers/user'
import { firebaseApp } from './firebase/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './styles/index.css'
import 'antd/dist/antd.css'

firebaseApp.auth().onAuthStateChanged(user => {
  console.log('OnauthStateChange!!!!')
  if (user){
    console.log('WE HAVE A USER!!', user);
    const { email, uid } = user
    const payload = {
      email,
      uid
    }
    store.dispatch(logUser(payload))
  } else {
    store.dispatch(logOut())
  }
})

const store = configureStore()
export default store

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/loading" component={Loading} />
        </Switch>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
