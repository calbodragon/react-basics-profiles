import React from 'react';
//Es important tener en cuenta como se va a leer la información que se tiene
//en las cajas de texto,para ello y para muchas mas cosas react nos da EVENTOS
//en este caso el evento ONCHANGE, donde usamos un método agregado a la clase
//por buenas prácticas debemos aconstumbrarnos si el evento es ONCHANGE
//llamarlo HANDLECHANGE
class ProfileForm extends React.Component {

    //creamos el método HANDLECHANGE, este metodo recibe el evento
    //y vamos a poder ver el valor a medida que va cambiando la información
    //que se escribe en el input.
    handleChange = e => {
        //cuando pongo una sola e efectivamente verifico que se está imprimiendo
        //el evento (confirmar en inspector de codigo)
        //si quiere ver el VALOR de lo que estamos escribiendo debemos decir 
        //value: e.target.value, existe otro valor importante que es el nombre del input
        //que causa este evento.
        console.log( {
                name: e.target.name,   
                value: e.target.value
            } 
        );
    }
    //tambien va a recibir un evento, excepto que esta vez no hay un valor ni tampoco hay un nombre
    //solo podemos decir que algo sucedió [Hacer ejercicio en pantalla y mostrar que borro lo que se
    //tenia para hablar de SUBMIT], cuando hay un boton dentro de un formulario ese boton es de tipo SUBMIT
    //es su valor por omisión sino queremos que pase, debemos especificar que el boton es de tipo BUTTON,
    //la otra forma es manejando cuando ocurra el evento ONSUBMIT desde el form
    handleClick = e => {
        console.log("El boton ha sido presionado");
    };
    //sino queremos que el formulario se envie debemos realizar un preventDefault
    //este aspecto se llama enlazar eventos, estamos conectando la acción que esta haciendo el usuario
    //con nuestros componentes de React, asi con los FORMULARIOS TENEMOS UNA MANERA DE LEER EVENTOS
    //QUE ESTA REALIZANDO EL USUARIO TAN PRONTO ESCRIBE VEMOS QUE ESTA ESCRIBIENDO, CUANDO DA CLICK
    //RECIBIMOS ESE CLICK Y CUANDO SE ENVIA EL FORMULARIO TAMBIEN LO RECIBIMOS Y LO DETENEMOS Y ESTE
    //ES EL PUNTO DONDE EMPEZAMOS A IMPLEMENTAR ESTADOS PARA DECIDIR QUE HACEMOS CON ESTA INFORMACIÓN
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
                {/** Los botones no tiene  un onChange pero si posee un onClick y 
                le asignamso su correspondinete handleclick
                quitamos el type button para probar evitar el evento de envio*/}
                <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
            </form>
        </div>
        );
    }
}

export default ProfileForm;