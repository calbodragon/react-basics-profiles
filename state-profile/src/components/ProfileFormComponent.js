import React from 'react';
//En este momento tenemos tres metodos que manejan los eventos del formulario
//pero la información no la estamos guardando, cuando queremos hacer submit,
//no hay lugar para obtener esa informacion, note que en handleChange, estamos
//imprimiendo esa información por consola pero necesito indicar que la información
//la deseo guardan, es acá que hacemos uso de SETSTATE (función propia de la clase component),
//Se le pasa un objeto con la información que queremos guardar.
//(Mostrar como cambia el estado utilizando REACT TOOLS)
//Hay que tener en cuenta que nuestro formulario quiere tener VARIOS CAMPOS.
//si lo dejamos como está, cada uno de estos campos va a llamar a firstName, lo cual debe
//estar en su propip espacio, 

//aunque no se ve esta información se esta guardando en dos sitios, cada input guarda su propio
//valor y ademas le dice a setstate que lo guarde lo ideal es tener una sola fuente de información
//para ello convertimos los INPUT DE NO CONTROLADOS A CONTROLADOS con VALUE.

class ProfileForm extends React.Component {

    //el estado se debe INICIALIZAR, DEJAR QUE SE COMETA EL ERROR
    state = {
        jobTitle: 'Designer',
    };

    handleChange = e => {
        console.log( {
                name: e.target.name,   
                value: e.target.value
            } 
        );
        this.setState({
            //firstName: e.target.value,
            //identifica el input de cada uno que llama según su name
            [e.target.name] : e.target.value
        });
    }
    handleClick = e => {
        console.log("El boton ha sido presionado");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("El formulario hizo el submit")
    };
    render(){
        return(
            <div>
            <h1>Nuevo Asistente</h1>

            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label>Nombres</label>
                    <input
                        onChange= {this.handleChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.state.firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input
                        onChange= {this.handleChange}  
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.state.lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        onChange= {this.handleChange}  
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.state.email}
                    />
                </div>
                <div className="form-group">
                    <label>En que trabajas</label>
                    <input
                        onChange= {this.handleChange}  
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.state.jobTitle}
                    />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input
                        onChange= {this.handleChange}  
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.state.twitter}
                    />
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
            </form>
        </div>
        );
    }
}

export default ProfileForm;