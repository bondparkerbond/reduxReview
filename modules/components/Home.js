import React from 'react'
import Title from 'react-title-component'
import Tweets from './Tweets'
// createClass is used in docs so you don't need to know ES2015, but you need things like getInitialState so it's bad
const Home = () => (
  <div>
    <Title render={prev => `${prev} | Home`}/>
    <Tweets />
    <p>Home!</p>
  </div>
)

export default Home
