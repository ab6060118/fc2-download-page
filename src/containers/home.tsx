import * as React from 'react';

interface HomeContainerProps {}

interface HomeContainerState {}

export default class HomeContainer extends React.PureComponent<HomeContainerProps,HomeContainerState> {
  render() {
    return (
      <>
        <div>Header</div>
        <div>Content</div>
      </>
    )
  }
}
