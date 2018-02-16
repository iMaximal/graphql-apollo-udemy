import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// frontend rendering library agnostic :-)
// get data from server and store it locally
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// provides an integration between react and out server side
import { ApolloProvider } from 'react-apollo'

import App from './App'

const link = new HttpLink({ uri: 'http://localhost:4000/graphql' })

// path: /graphql by default
const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link,
  cache: new InMemoryCache(),
})

console.log(client);
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
