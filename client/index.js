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
import './style/style.css'

import App from './containers/App/App'

const link = new HttpLink({ uri: 'http://localhost:4000/graphql' })

// path: /graphql by default
const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link,
  cache: new InMemoryCache(),
  // takes every piece of data that is fetched by our Apollo client from the back-end
  // the result of this function or whatever is returned from this function is used to identify that piece of data inside of the Apollo store or inside of the Apollo client
  dataIdFromObject: o => o.id,
})

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
