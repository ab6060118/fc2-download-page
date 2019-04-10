import * as React from 'react';
import LoginPage from './login_page'
import Home from './home'
import Firebase, { provider } from '../libs/firebase'
import {
  Route,
  Redirect,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

interface User{
  username:string
  imgUrl:string
  accessToken:string
  email:string
}

interface AppProps extends RouteComponentProps {} 

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

class App extends React.PureComponent<AppProps,AppState> {
  constructor(props:AppProps) {
    super(props)
    this.state = {
      isLogin: false,
      user:undefined
    }
  }

  componentDidMount() {
    let { history } = this.props
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push('/')
      } else {
        history.push('/login')
      }
    });
  }

  render() {
    let { isLogin, user } = this.state

    console.log(this.props);

    return (
        <Switch>
          <Route path='/login' component={LoginPage} />
          <PrivateRoute path='/' component={Home} />
        </Switch>
      )
  }
}
export default withRouter(App)
