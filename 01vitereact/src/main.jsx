/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'

function MyApp(){
  return(
    <h3>Hello from MyApp</h3>
  )
}
function MyApp1(){
  return(
    <h3>Hello from MyApp1</h3>
  )
}

/*
  NOT a Valid Syntan
  const reactElement = {
    type: "a",
    props: {
      href: "https://shivam-patel.netlify.app/",
      target: "_blank",
    },
    children: "click me to visit my portfolio",
  };

*/
const anotherElement = (
  <a href='https://shivam-patel.netlify.app/' >Portfolio</a>
)

const anotherUser = "another"
const reactElement = React.createElement('a', {
  href: "https://shivam-patel.netlify.app/",
  target: "_blank",
},"Click me to visit my portfolio", anotherUser)


ReactDOM.createRoot(document.getElementById('root')).render(
  App()
  // MyApp()
  // <MyApp1/>
  // anotherElement
  // reactElement
)
