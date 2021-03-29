import Header from './components/Header/Header'
import SearchContainer from './containers/SearchContainer/SearchContainer'
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <SearchProvider>
      <Header />
      <SearchContainer />
    </SearchProvider>
  );
}

export default App;
