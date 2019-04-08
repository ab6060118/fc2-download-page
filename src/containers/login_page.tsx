import * as React from 'react';
import LoginPage from '../components/login_page'
import Firebase, { provider } from '../libs/firebase'

interface LoginPageProps {
  setLoginState:Function
}

interface LoginPageState {
  isLoading:boolean
}

export default class LoginPageContainer extends React.PureComponent<LoginPageProps,LoginPageState> {
  constructor(props:any) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.handleLoginClick = this.handleLoginClick.bind(this)
  }

  handleLoginClick(e:React.MouseEvent<HTMLButtonElement>) {
    let { setLoginState } = this.props

    this.setState({ isLoading: true })
    Firebase.auth().signInWithPopup(provider).then((result) => {
      let token = (result.credential as any).accessToken;
      let user = result.user;
      setLoginState(token, user)
    }, (error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      return
    }).then(() => {
      this.setState({ isLoading: false })
    });
  }

  render() {
    let { isLoading } = this.state
    return (
      <LoginPage showLoadingMask={isLoading} handleLoginClick={this.handleLoginClick}/>
    )
  }
}
