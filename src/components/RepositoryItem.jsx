export function RepositoryItem(props) {

    return (
        <li>
            <strong>{props.repo?.name ?? 'default'}</strong>
            <p>{props.repo?.description ?? 'default'}</p>
            <a href={props.repo?.html_url ?? 'default'}>Acessar Repositório</a>
        </li>
    )
}