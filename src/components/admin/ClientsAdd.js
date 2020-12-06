import React from 'react';
import{useForm} from 'react-hook-form';
import Api from '../../Api';
import {getToken} from '../../Auth';
import {useHistory} from 'react-router-dom';

export default function ClientsAdd(){
    const {handleSubmit, register} = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        Api.post('/clients', {
            name : data.name,
            phone: data.phone,
            email : data.email,
            address : data.address,
        },{
            headers:{
                Authorization: 'Bearer ' + getToken()
            }
        })
        .then(function(response){
            console.log(response.data);
        })
        .finally(function(){
            history.push('/admin/clients/view');
            window.location.reload(true);
        })
    }
       return(
           <div>
                <h1>Novo Cliente</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label> Nome:</label>
                        <input type="text" className="form-control" name="name"
                        ref={register} required id="name"></input>
                    </div>
                    <div className="form-group">
                        <label> Telefone:</label>
                        <input type="text" className="form-control" name="phone"
                        ref={register} required id="phone"></input>
                    </div>
                    <div className="form-group">
                        <label> E-mail:</label>
                        <input type="email" className="form-control" name="email"
                        ref={register} required id="email"></input>
                    </div>
                    <div className="form-group">
                        <label> Endereço:</label>
                        <input type="text" className="form-control" name="address"
                        ref={register} required id="address"></input>
                    </div>
                    <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">
                                Salvar
                            </button>
                    </div>
                </form>       
        </div>
       )

}