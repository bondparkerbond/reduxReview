import React from 'react'
// If you don't need lifecycle methods, it's better to just write react as a function:
// pass in = ( props, here ) => // This is best for presentation components
// it is a pure function and doesn't need state...
const About = () => (
  <div>
    <h1>This is my twitter app</h1>
  </div>
)

export default About
// example of the other way: if you need lifecycle componentDidMount, WillMount, state, etc.
// class About extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   ...
// }