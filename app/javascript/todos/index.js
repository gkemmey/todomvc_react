import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

document.addEventListener('turbolinks:load', () => {
  const node  = document.querySelector('[data-behavior~=todos-mount]')
  const props = JSON.parse(node.getAttribute('data-props'))

  ReactDOM.render(<App { ...props } />, node)
})
