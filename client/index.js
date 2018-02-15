import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

// path: /graphql by default
const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider store={} client={client} immutable={}>
      <div>Lyrical</div>
    </ApolloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
