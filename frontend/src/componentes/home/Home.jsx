import React from 'react';
import Main from '../layout/Main';
const headerProps = {
    icone: 'home',
    titulo: "Início",
    subtitulo: "Aplicação para cadastro de usuários"
}
const Home = (props) => {
    return (
        <Main {...headerProps}>
            <div className="display-4">Bem Vindo!</div>
            <hr/>
            <p className="mb-0">Exemplo de aplicação em React para cadastro de usuário.</p>
        </Main>
    )
}
export default Home;