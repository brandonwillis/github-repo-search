import { useSearchContext } from '../../context/SearchContext'
import styles from './SearchContainer.module.scss'
import RepositoryLineItem from '../../components/RespositoryLineItem/RepositoryLineItem'

function SearchContainer() {
    const { repos, message } = useSearchContext();

    return (
        <section className={styles.container}>
            {message && <h3>{message}</h3>}
            {repos.length > 0 && (
                <ul>
                    {
                        repos.map(item => <RepositoryLineItem {...item} key={item.id} />)
                    }
                </ul>
            )}
        </section>
    )
}

export default SearchContainer;