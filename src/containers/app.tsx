import * as React from 'react';
import LoginPage from './login_page'
import Home from './home'
import Firebase, { provider } from '../libs/firebase'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

interface User{
  username:string
  imgUrl:string
  accessToken:string
  email:string
}

interface AppProps {}

interface AppState {
  isLogin:boolean
  user:any
}

const PrivateRoute = ({ component: Component, ...rest }:any) => {
  return (
    <Route {...rest} render={props => Firebase.auth().currentUser ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }} />
    )}/>
  )
}

export default class App extends React.PureComponent<AppProps,AppState> {
  constructor(props:AppProps) {
    super(props)
    this.state = {
      isLogin: false,
      user:undefined
    }
  }

  componentDidMount() {
/*     console.log(Firebase); */
    // Firebase.auth().onAuthStateChanged((user) => {
      // if (user) {
        // this.setState({ user, isLogin: true, })
      // } else {
        // this.setState({ user: undefined, isLogin: false,
        // })
      // }
    /* }); */
  }

  render() {
    let { isLogin, user } = this.state

    return (
      <Router>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <PrivateRoute path='/' component={Home} />
        </Switch>
      </Router>
      )
  }
}
