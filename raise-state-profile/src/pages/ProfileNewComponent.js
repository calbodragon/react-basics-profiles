import React from 'react';
import '../styles/ProfileNewStyle.css'
import NavBar from '../components/NavbarComponent';
import Profile from '../components/ProfileComponent';
import ProfileForm from '../components/ProfileFormComponent';

//debemos implementar una tecnica para que el estado cambie en profilenew
//y no en profileform

class ProfileNew extends React.Component {
    //1. Inicializamos STATE, donde añadimos una propiedad llamada form
    //que tambien tiene un objeto vacio
    //en la consola nos aparece un error de controlado a no controlado la clave esta en inicializar
    //los valores del formulario
    state = { form: {
        firstName: '',
        lastName: '',
        email:'',
        jobTitle:'',
        twitter:''
    }};
    //2. Creamos metodo llamado handleChange que va a recibir el evento
    //y va a recibir un setState, le pasamos un objeto y queremos que el 
    //form ahora tenga la información del evento ocurrido con nombre y valor
    //este handleChange ahora le pertenence a PROFILENEW, entonces debemos pasar
    //COMO PROP desde PROFILENEW a PROFILEFORM
    handleChange = e => {
        //tener en cuenta que uno y otro desaparece, se SOBREESCRIBE LA INFORMACION
        //puedo hacer una copia del estado del form y actualizar o dejar caer
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render(){
        return (
            <div>
                <NavBar />
                <div className="ProfileNew__hero">
                    <span className="ProfileNew__hero-text">
                        "Bienvenido a la conferencia Geek! , 
                         esperamos todas nuestras charlas sean de tu total interes"
                    </span>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            {/**esta ifnormacion la obtenemos de nuestro formulario */}
                            <Profile    
                                    firstName = {this.state.form.firstName} 
                                    lastName = {this.state.form.lastName} 
                                    jobTitle = {this.state.form.jobTitle} 
                                    twitter = {this.state.form.twitter}
                                    email = {this.state.form.email} 
                                    avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                                />
                        </div>
                        <div className="col-6">
                            <ProfileForm onChange={this.handleChange} 
                                formValues =  {this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileNew;