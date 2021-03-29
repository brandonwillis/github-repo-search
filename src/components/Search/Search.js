import { useSearchContext } from '../../context/SearchContext'
import styles from './Search.module.scss'

function Search() {
    const { searchInput, handleUpdateSearchParam } = useSearchContext();

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Search User's Repositories" value={searchInput} onChange={handleUpdateSearchParam} aria-label="search-input" />
        </div>
    )
}

export default Search;