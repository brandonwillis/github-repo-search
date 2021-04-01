import { useSearchContext } from '../../context/SearchContext'
import styles from './SearchContainerGQL.module.scss'
import RepositoryLineItemGQL from '../../components/RepositoryLineItemGQL/RepositoryLineItemGQL'
import { useEffect } from 'react'
import { FETCH_USER_REPOS } from '../../actions/repos-query'
import { useLazyQuery } from '@apollo/client';
import { useMemo } from 'react'

function SearchContainerGQL() {
    const { debouncedInput, graphQLSelected } = useSearchContext();
    const [fetchUserRepos, { data, loading, error }] = useLazyQuery(FETCH_USER_REPOS);

    useEffect(() => {
        if (!debouncedInput) return
        fetchUserRepos({
            variables: { login: debouncedInput }
        });
    }, [debouncedInput, fetchUserRepos])

    useEffect(() => {
        if (!graphQLSelected) {
            return <></>
        }
    }, [graphQLSelected])

    return useMemo(() => {
        console.log("v4 re-render")

        return (
            <section className={styles.container}>
                {loading && <h3>Fetching repositories...</h3>}
                {data && !data?.repositoryOwner && <h3>No results found</h3>}
                {error && <h3>{error.message}</h3>}
                {data?.repositoryOwner && (
                    <ul>
                        {
                            data.repositoryOwner.repositories.edges.map(item => <RepositoryLineItemGQL {...item.node} key={item.node.id} />)
                        }
                    </ul>
                )}
            </section>
        )
    }, [data, loading, error])
}

export default SearchContainerGQL;