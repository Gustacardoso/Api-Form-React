import React from 'react'
import {Link, Route, Switch, useParams, useRouteMatch} from 'react-router-dom';

function Products(){
    let {path, url} = useRouteMatch();
    return(
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
                      <h3>Seleciona uma Categoria</h3>
                  </Route>
                  <Route path={`${path}/:catId`}>
                      <Cat />
                  </Route>
              </Switch>
         </div>
         <div className="col-md-1"></div>
        </div>
    )
}

export default Products;

function Cat(){
    let {catId} = useParams();
    return(
        <>
        <h3>Categoria {catId} for selecionado</h3>
        <p>
            
            Produtos da caregoria {catId} sendo exibidos....
          
        </p>
        </>
    );
}