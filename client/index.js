import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// frontend rendering library agnostic :-)
// get data from server and store it locally
import ApolloClient from 'apollo-client'

// provides an integration between react and out server side
import { ApolloProvider } from 'react-apollo'

import App from './App.js'

// path: /graphql by default
const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
