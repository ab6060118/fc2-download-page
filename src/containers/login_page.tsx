import * as React from 'react';
import LoginPage from '../components/login_page'
import Firebase, { provider } from '../libs/firebase'
import { Redirect } from "react-router"; 

interface LoginPageProps { }

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
    this.setState({ isLoading: true })
    Firebase.auth().signInWithPopup(provider).then((result) => {
    }, (error) => {
      console.log(error);
      return
    }).then(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    let { isLoading } = this.state

    if(Firebase.auth().currentUser) return <Redirect to='/' />

    return (
      <LoginPage showLoadingMask={false} handleLoginClick={this.handleLoginClick}/>
    )
  }
}
