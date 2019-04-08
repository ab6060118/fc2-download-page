import * as React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

interface LoginPageProps {
  handleLoginClick:React.MouseEventHandler<HTMLButtonElement>
  showLoadingMask:boolean
}

interface LoginPageState {}

export default class LoginPage extends React.PureComponent<LoginPageProps,LoginPageState> {
  render() {
    let { handleLoginClick, showLoadingMask } = this.props
    return (
      <div>
        <Button onClick={handleLoginClick} disabled={showLoadingMask}>Login</Button>
      </div>
    )
  }
}
