import React, { useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form';
import {useHistory,useParams} from 'react-router-dom';
import Api from '../../Api';
import { getToken } from '../../Auth';


function ContactsResponse(){
     
     let { id } = useParams();
     const [contact, setContact] = useState([]);
    const  {handleSubmit, register} = useForm();

    const history = useHistory();

    useEffect( () =>{
        Api.get(`/contacts/${id}`,
                {
                    params :{},
                    headers : {
                        Authorization : "Bearer " + getToken()
                    }
                })
        .then( (response)=>{
            setContact(response.data)
        })
       

    },[id]);
    const handleChange = (e) =>{
        setContact({...contact, status: e.target.value})
    }

    const onSubmit = (data) => {
        Api.post(`/contacts/update/${contact.idContact}`,
        {
            status:data.status,
            description:data.description
        },
        {
            headers:{
                Authorization : "Bearer " + getToken()
            }
        })
        .then()
        .finally(() => {
              history.push('/admin/contacts/view')
        })
    }

   
    return (
        <>
            <h1>Retorno ao Contato </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table className="table table-striped">
                        <thead>

                        </thead>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{contact.idContact}</td>
                            </tr>
                            <tr>
                                <th>Nome</th>
                                <td>{contact.nome}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{contact.email}</td>
                            </tr>
                            <tr>
                                <th>Mensagem</th>
                                <td>{contact.message}
                                  
                                </td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>
                                <div className="form-group">
                                        <select name="status" value = {contact.status} onChange={handleChange} ref={register}>
                                            <option disabled>Selecione um status</option>
                                            <option value="0"> Aberto</option>
                                            <option value="1"> Fechado</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>descrição de retorno</th>
                                <td>
                                    <div className="form-group">
                                        <textarea name= "description" ref={register} defaultValue ={contact.description}>

                                        </textarea>

                                    </div>
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                    <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">
                                Salvar
                            </button>
                    </div>
               </form>     
        </>
    )
}

export default ContactsResponse;