import { useSearchContext } from '../../context/SearchContext'
import styles from './SearchContainer.module.scss'
import RepositoryLineItem from '../../components/RespositoryLineItem/RepositoryLineItem'
import { useMemo, useEffect } from 'react'

function SearchContainer() {
    const { repos, message, graphQLSelected } = useSearchContext();

    useEffect(() => {
        if (!graphQLSelected) {
            return <></>
        }
    }, [graphQLSelected])

    return useMemo(() => {
        console.log("v3 re-render", repos, message)
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
    }, [repos, message])
}

export default SearchContainer;