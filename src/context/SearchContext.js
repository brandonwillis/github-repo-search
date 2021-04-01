import { createContext, useState, useContext, useMemo } from 'react'
import { debounce } from 'lodash'
import { fetchUserRepos } from '../actions/repos'

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchInput, setSearchInput] = useState('');
    const [debouncedInput, setDebouncedInput] = useState('');
    const [graphQLSelected, setGraphQLSelected] = useState(false);    /* feature flag to enable using github graphqlv4 api*/
    const [repos, setRepos] = useState([]);
    const [message, setMessage] = useState('');

    const debounceSearch = useMemo(
        () =>
            debounce(async (value) => {
                if (!value) return

                setRepos([]);
                setMessage(`Fetching repositories for: ${value} ...`);

                let response = await fetchUserRepos(value);

                if (response.message) {
                    setMessage(`No results found for: ${value}`);
                } else {
                    setMessage('');
                    const sorted = response.sort((x, y) => y.stargazers_count - x.stargazers_count);
                    setRepos(sorted);
                }
            }, 1000),
        []
    )

    const debounceSearchGQL = useMemo(
        () =>
            debounce(async (value) => {
                if (!value) return

                setDebouncedInput(value);
            }, 1000),
        []
    )

    const handleUpdateSearchParam = (event) => {
        setSearchInput(event.target.value);

        graphQLSelected ?
            debounceSearchGQL(event.target.value) :
            debounceSearch(event.target.value)
    }

    return (
        <SearchContext.Provider
            value={{
                searchInput,
                debouncedInput,
                repos,
                message,
                graphQLSelected,
                handleUpdateSearchParam
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}

export function useSearchContext() {
    const context = useContext(SearchContext);
    return context;
}