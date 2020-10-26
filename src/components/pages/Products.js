import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Api from '../../Api';

function Products() {
    let { path, url } = useRouteMatch();
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <h1>Pagina Produtos</h1>
                <ul>
                    <li><Link to={`${url}/1`}>Categoria 1 </Link></li>
                    <li><Link to={`${url}/2`}>Categoria 2 </Link></li>
                    <li><Link to={`${url}/3`}>Categoria 3 </Link></li>
                </ul>
                <Switch>
                    <Route exact path={`${path}`}>
                        <AllCategory />
                    </Route>
                    <Route path={`${path}/:catId`}>
                        <Category />
                    </Route>
                </Switch>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}

export default Products;

function Category() {
    let { catId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Api.get(`/products/category/${catId}`)
            .then((Response) => {
                setProducts(Response.data);
               
            });
    }, [catId])
    return (
        <>
            <h3>Categoria {catId} for selecionado</h3>

            <table>
                <thead>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descricao</th>
                </thead>
                <tbody>
                    {products.map((product, index)=>
                    <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    </tr>
                    )}
                </tbody>

            </table>
        </>
    );
}

function AllCategory() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Api.get('/products')
            .then((Response) => {
                setProducts(Response.data);
               
            });
    }, [])
    return (
        <>
            <h3>Lista de todos os produtos</h3>

            <table>
                <thead>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descricao</th>
                </thead>
                <tbody>
                    {products.map((product, index)=>
                    <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    </tr>
                    )}
                </tbody>

            </table>
        </>
    );
}