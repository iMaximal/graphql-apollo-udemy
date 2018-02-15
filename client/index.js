import React from 'react'
import ReactDOM from 'react-dom'
// frontend rendering library agnostic :-)
// get data from server and store it locally
import ApolloClient from 'apollo-client'
// provides an integration between react and out server side
import { ApolloProvider } from 'react-apollo'
import SongList from './components/SongList/SongList'

// path: /graphql by default
const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
