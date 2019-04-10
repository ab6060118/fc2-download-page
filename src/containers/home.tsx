import * as React from 'react';
import Content from './content'

interface HomeContainerProps {}

interface HomeContainerState {}

export default class HomeContainer extends React.PureComponent<HomeContainerProps,HomeContainerState> {
  render() {
    return (
      <>
        <div>Header</div>
        <Content />
      </>
    )
  }
}
