import Header from './components/Header/Header'
import SearchContainer from './containers/SearchContainer/SearchContainer'
import SearchContainerGQL from './containers/SearchContainerGQL/SearchContainerGQL'
import { SearchProvider } from './context/SearchContext'
import { ApolloProvider } from '@apollo/client';
import { client } from './client/client'

function App() {
  return (
    <ApolloProvider client={client}>
      <SearchProvider>
        <Header />
        <SearchContainer />
        <SearchContainerGQL />
      </SearchProvider>
    </ApolloProvider>
  );
}

export default App;
