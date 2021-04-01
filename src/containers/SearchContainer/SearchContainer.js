import { useSearchContext } from '../../context/SearchContext'
import styles from './SearchContainer.module.scss'
import RepositoryLineItem from '../../components/RespositoryLineItem/RepositoryLineItem'
import { useMemo } from 'react'

function SearchContainer() {
    const { repos, message, graphQLSelected } = useSearchContext();

    return useMemo(() => {
        if (graphQLSelected) {
            return <div className={styles.hideContainer}></div>
        }

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
    }, [repos, message, graphQLSelected])
}

export default SearchContainer;