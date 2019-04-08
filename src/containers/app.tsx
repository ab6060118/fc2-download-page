import * as React from 'react';
import LoginPage from './login_page'
import Firebase, { provider } from '../libs/firebase'

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

export default class App extends React.PureComponent<AppProps,AppState> {
  constructor(props:AppProps) {
    super(props)
    this.state = {
      isLogin: false,
      user:undefined
    }
    this.setLoginState = this.setLoginState.bind(this)
  }

  componentDidMount() {
    console.log(Firebase.auth().currentUser);
  }

  setLoginState(token:string, user:any) {
    if(!user) return;
    this.setState({
      user: user,
      isLogin: true
    })
  }

  render() {
    let { isLogin, user } = this.state

    return (
      <div>
        {(isLogin && user) ? (
          <div>login success</div>
        ) : (
          <LoginPage setLoginState={this.setLoginState}/>
        )}
      </div>
    )
  }
}
