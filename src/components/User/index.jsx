import './styles.scss'

export function User(props) {
    const { userData } = props

    return (
        <section className="user">
            <h1>Dados do Usuário</h1>
            <div className="user__list">
                <ul className="user__ref">
                    <li>Nome:</li>
                    <li>E-mail:</li>
                    <li>Bio:</li>
                    <li>Blog:</li>
                    <li>Página:</li>
                </ul>

                <ul className="user__data">
                    <li>{userData.name}</li>
                    <li>{userData.email}</li>
                    <li>{userData.bio}</li>
                    <li><a href={userData.blog} target="_blank" rel="noreferrer">{userData.blog}</a></li>
                    <li><a href={userData.html_url} target="_blank" rel="noreferrer">{userData.html_url}</a></li>
                </ul>
            </div>
        </section>
    )
}