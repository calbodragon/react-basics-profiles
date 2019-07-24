import React from 'react';

class ProfileForm extends React.Component {
    render(){
        return(
            <div>
            <h1>Nuevo Asistente</h1>

            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label>Nombres</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                    />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                    />
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input 
                        className="form-control" 
                        type="email" 
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label>En que trabajas</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                    />
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                    />
                </div>
                <button className="btn btn-primary">Guardar</button>
            </form>
        </div>
        );
    }
}

export default ProfileForm;