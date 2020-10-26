import React from 'react';
import { useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import Api  from '../../Api';
import {useHistory} from 'react-router-dom';
function Contact() {

    const {handleSubmit, register, errors} = useForm();
    const history = useHistory();
    const onSubmit = data =>{
      console.log(data);
      Api.post('/contacts',{
          name : data.name,
          email : data.email,
          message : data.message
      }).then(function(response){
          console.log(response);
      })
      .catch(function(erros){
          console.log(erros);
      })
      .finally(function(){
          history.push('/contactsview');
          // executar algo depois de inserido no banco
      })
    }
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <h1>Pagina Contatos</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input ref={register({
                            required:"Required"
                        })} 
                        className="form-control" 
                        type="text" name="name" />
                        <ErrorMessage errors={errors} name="name" />
                </div>
                <div className="form-group">
                        <label>Email:</label>
                        <input ref={register({
                            required:"Required"
                        })} 
                        className="form-control" 
                        type="text" name="email" />
                        <ErrorMessage errors={errors} name="email" />
                </div>
                <div className="form-group">
                        <label>Mensagem:</label>
                        <textarea ref={register({
                            required:"Required"
                        })}  
                        className="form-control"
                              type="text"
                              name="message">
                              <ErrorMessage errors={errors} name="message" />      
                        </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                <br />
                <br />
            </form>
         </div>
                <div className="col-md-1"></div>
            </div>
    )
}

export default Contact;