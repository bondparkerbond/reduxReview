import React from 'react'
import { connect } from 'react-redux' //this gives it access to store and dispatch
import Feed from './Feed'
import AddTweet from './AddTweet'
import Search from './Search'

const mapStateToProps = (state) => {
  return { tweets: state.tweets }
}

const Tweets = ({ tweets }) => (
  <div>
    <AddTweet />
    <Feed tweets={tweets} />
    <Search />
  </div>
)
// this way never using state, just using props, which is better(not sure why better...)
export default connect(mapStateToProps)(Tweets)
