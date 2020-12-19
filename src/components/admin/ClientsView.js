import React, { useEffect, useState } from 'react';
import Api from '../../Api';
import { getToken } from '../../Auth';
import {useHistory} from 'react-router-dom';

function ClientsView(){
    const [Clients, setClients] = useState([]);
    
    const history = useHistory();


   useEffect( () =>{
       Api.get('/clients',
               {
                   params :{},
                   headers : {
                       Authorization : "Bearer " + getToken()
                   }
               }
       )
       .then(function(response) {
           setClients (response.data)
       }

       )

   },[]);

   const handleAddButton = () => {
       history.push('/admin/clients/add');
   }

   const handleUpdateButton = (id) =>{
       history.push(`/admin/clients/update/${id}`);
   }

   const handleDeleteButton = (id) => {
       Api.delete(`/clients/delete/${id}`, {},{
           headers:{
               Authorization:'Bearer '+ getToken()
           }
       }).then(function(response){
          console.log(response.data);

       })
       .catch((error)=>{
           console.log(error);
       })
       .finally(()=>{
           window.location.reload(true);
       })
   }

   return(
       <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
            <h1>Clientes</h1>
            <br/> 
                <button className="btn btn-primary" onClick={handleAddButton}>Adicionar Cliente</button>
                <br/><br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Endereço</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Clients.map((client, index) =>
                            <tr key={index}>
                                <td>{client.idclient}</td>
                                <td>{client.name}</td>
                                <td>{client.phone}</td>
                                <td>{client.email}</td>
                                <td>{client.anddress}</td>
                                <td>
                                    <button onClick={() =>handleUpdateButton(client.idclient)}
                                            className="btn btn-primary">
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() =>handleDeleteButton(client.idclient)}
                                            className="btn btn-warning">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
       </div>
   )


}
export default ClientsView;

