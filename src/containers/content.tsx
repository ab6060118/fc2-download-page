import * as React from 'react';
import firebase, { db, storage } from '../libs/firebase'

interface ContentContainerProps {}

interface ContentContainerState {
  posts:any[]
}

export default class ContentContainer extends React.PureComponent<ContentContainerProps,ContentContainerState> {
  query:firebase.firestore.Query
  lastDoc:firebase.firestore.QueryDocumentSnapshot

  constructor(props:any) {
    super(props)

    this.state = {
      posts: []
    }

    this.handleNextQuery = this.handleNextQuery.bind(this)
  }

  componentDidMount() {
    let collection
    this.query = db.collection('sukebei').orderBy('time', "desc").limit(25)

    storage.ref('1027043').child('1549013131.42.jpg').getDownloadURL().then(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })

    this.query.get().then(snap => {
      this.lastDoc = snap.docs[snap.size - 1]
      this.setState({
        posts: snap.docs.map(doc => doc.data())
      })
    })
  }

  handleNextQuery() {
    let { posts } = this.state
    this.query.startAfter(this.lastDoc).get().then(snap => {
      this.lastDoc = snap.docs[snap.size - 1]
      this.setState({
        posts: [ ...posts, snap.docs.map(doc => doc.data())]
      })
    })
  }

  render() {
    let { posts } = this.state
    return (
      <div>
        {
          posts.map(post => {
            return <div key={post.time}>{post.name}</div>
          })
        }
      </div>
    )
  }
}
