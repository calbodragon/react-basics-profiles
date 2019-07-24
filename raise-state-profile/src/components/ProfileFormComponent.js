import React from 'react';
/**Levantar el estado es una técnica de React que pone el estado en una localización donde se le 
 * pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a 
 * todos los componentes que quieren compartir esa información.
    Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada 
    vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a 
    renderizar todo el componente y todos sus descendientes. 
*/
class ProfileForm extends React.Component {

    //REACTIVO REACCIONAR SE VUELVE A RENDERIZAR TODOS SUS COMPONENTES Y TODOS SUS DESENCENDENTES
    //NECESITAMOS QUE EL PROFILE EN VEZ DE TENER LA MISMA INFOMACION ESA INFORMACION EMPIECE A
    //APARECER
    state = {
        
    };
    
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
                        onChange= {this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}
                    />
                </div>
                <div className="form-group">
                    <label>En que trabajas</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                    />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input
                        onChange= {this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}
                    />
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
            </form>
        </div>
        );
    }
}

export default ProfileForm;