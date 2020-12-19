import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../Api';
import { getToken} from '../../Auth';
function ContactsView() {

    const [Contacts, setContacts] = useState([]);
    const history = useHistory();
    useEffect(() => {
        Api.get('/contacts',
             {

                params:{},
                headers:{
                    Authorization : 'Bearer ' + getToken()
                }
            }
        )
            .then((Response) => {
                //console.log(Response);
                setContacts(Response.data);
            })
            .catch((errors) => {
                console.log(errors);
            })
            .finally(() => {

            });

    }, []);

    const handleClickResponse = (id) =>{
            history.push(`/admin/contacts/response/${id}`)
           
    }

    const handleClickDelete = (id) =>{
        Api.post(`/contacts/delete/${id}`,{},
        {
            
            headers:{
                Authorization: 'Bearer ' + getToken()
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
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <h1>Lista de Contato</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Messagem</th>
                            <th>Status</th>
                            <th colSpan="2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Contacts.map((contacts, index) =>
                            <tr key={index}>
                                <td>{contacts.idContact}</td>
                                <td>{contacts.name}</td>
                                <td>{contacts.email}</td>
                                <td>{contacts.message}</td>
                                <td>{contacts.status}</td>
                                <td>
                                    <button onClick={() =>handleClickResponse(contacts.idContact)}
                                            className="btn btn-primary">
                                        Responder
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() =>handleClickDelete(contacts.idContact)}
                                            className="btn btn-warning">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}

export default ContactsView