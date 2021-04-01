import styles from './RepositoryLineItemGQL.module.scss'

function RepositoryLineItem(node) {
    const {
        description,
        forkCount,
        issues,
        name,
        primaryLanguage,
        stargazerCount,
        url
    } = node

    return (
        <li className={styles.container}>
            <h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3>
            <p>{description}</p>
            <div className={styles.infoRow}>
                {primaryLanguage?.name && <span>{primaryLanguage?.name}</span>}
                <span><i className="fas fa-code-branch"></i>{forkCount}</span>
                <span><i className="far fa-star"></i>{stargazerCount}</span>
                <span><i className="fas fa-exclamation-circle"></i>{issues.totalCount}</span>
            </div>
        </li>
    )
}

export default RepositoryLineItem;