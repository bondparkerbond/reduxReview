import React from 'react'
import { connect } from 'react-redux' //this gives it access to store and dispatch
import Feed from './Feed'
import AddTweet from './AddTweet'

const mapStateToProps = (state) => {
  return { tweets: state.tweets }
}

const Tweets = ({ tweets }) => (
  <div>
    <AddTweet />
    <h1>This works</h1>
    <Feed tweets={tweets} />
  </div>
)
// this way never using state, just using props, which is better(not sure why better...)
export default connect(mapStateToProps)(Tweets)
