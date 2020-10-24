import React, { useEffect, useState } from 'react';
import Api from '../../Api';
function ContactsView() {

    const [Contacts, setContacts] = useState([]);

    useEffect(() => {
        Api.get('contacts')
            .then((Response) => {
                console.log(Response);
                setContacts(Response.data);
            })
            .catch((errors) => {
                console.log(console.errors);
            })
            .finally(() => {

            });

    }, [])
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
                        </tr>
                    </thead>
                    <tbody>
                        {Contacts.map((Contacts, index) =>
                            <tr key={index}>
                                <td>{Contacts.idContact}</td>
                                <td>{Contacts.name}</td>
                                <td>{Contacts.email}</td>
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