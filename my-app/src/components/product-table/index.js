// import { Container } from './styles';
import React, { Component } from 'react';
import "../../utils/bootstrap.min.css"
import { Link } from 'react-router-dom'

// import { Container } from './styles';

export default class Table extends Component {
    render() {

        const { products } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descricao</th>
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td><Link to={`/products/${product._id}`}>Acessar</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
