import React, {Component} from 'react';
import Main from '../layout/Main';
import axios from 'axios';

const headerProps = {
    icone: 'users',
    titulo: "Usuários",
    subtitulo: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}
const baseApiUrl = "http://localhost:3001/usuarios";
const initialState = {
    usuario: { nome: '', email: ''},
    lista: []
}
class UsuarioCrud extends Component {
    
    state = {...initialState};
    
    componentDidMount() {
        axios(baseApiUrl).then(response => {
          this.setState({ lista: response.data });
        })
    }

    limpar() {
        this.setState({ usuario: initialState.usuario});
    }

    gravar() {
        
        const usuario = this.state.usuario;
        const method = usuario.id ? 'put' : 'post';
        const url = usuario.id ? `${baseApiUrl}/${usuario.id}` : baseApiUrl;
        axios[method](url, usuario).then(response => {
            const lista = this.atulizarLista(response.data);
            this.setState({usuario: initialState.usuario, lista});
        });
    }

    atulizarLista(usuario) {
        const lista = this.state.lista.filter(u => u.id !== usuario.id);
        lista.unshift(usuario);
        return lista;
    }

    atualizarCampos(event) {
        const usuario = {...this.state.usuario};
        usuario[event.target.name] = event.target.value;
        this.setState({ usuario });

    }

    atualizarUsuario(usuario) {
        this.setState({usuario});
    }

    remover(usuario) {
        axios.delete(`${baseApiUrl}/${usuario.id}`).then(response => {
            const lista = this.state.lista.filter(u => u !== usuario);
            this.setState({lista});
        })
    }

    renderFormulario() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome: </label>
                            <input type="text" className="form-control" 
                                name="nome" value={this.state.usuario.nome} 
                                onChange={e => this.atualizarCampos(e)}
                                placeholder="Informe o nome completo"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail: </label>
                            <input type="email" className="form-control" 
                                name="email" value={this.state.usuario.email} 
                                onChange={e => this.atualizarCampos(e)}
                                placeholder="Informe um e-mail válido"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.gravar(e)}>Gravar</button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.limpar(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        );
    }

    renderLista() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th className="d-none d-md-block">ID</th>
                        <th>Nome</th>
                        <th className="d-none d-md-block">E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderLinhas()}
                </tbody>
            </table>
        )
    }

    renderLinhas() {
        return this.state.lista.map(usuario => {
            return (
                <tr key={usuario.id}>
                    <td className="d-none d-md-block">{usuario.id}</td>
                    <td>{usuario.nome}</td>
                    <td className="d-none d-md-block">{usuario.email}</td>
                    <td>
                        <div className="d-flex justify-content-center">
                            <button className="btn-sm btn btn-warning text-light" 
                                onClick={() => this.atualizarUsuario(usuario)}>
                                <i className="fa fa-user-edit"></i>
                            </button>
                            <button className="btn-sm btn btn-danger ml-2"
                                onClick={() => this.remover(usuario)}>
                                <i className="fa fa-trash-alt"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            )
        });
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderFormulario()}
                {this.renderLista()}
            </Main>
        )
    }
}
export default UsuarioCrud;