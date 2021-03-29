import styles from './RepositoryLineItem.module.scss'

function RepositoryLineItem({ html_url, name, description, language, forks, stargazers_count, open_issues }) {
    return (
        <li className={styles.container}>
            <h3><a href={html_url} target="_blank" rel="noreferrer">{name}</a></h3>
            <p>{description}</p>
            <div className={styles.infoRow}>
                {language && <span>{language}</span>}
                <span><i className="fas fa-code-branch"></i>{forks}</span>
                <span><i className="far fa-star"></i>{stargazers_count}</span>
                <span><i className="fas fa-exclamation-circle"></i>{open_issues}</span>
            </div>
        </li>
    )
}

export default RepositoryLineItem;