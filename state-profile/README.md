## Manejando Estado

Hasta esta instancia, todos los componentes han obtenido su información a través de `props` que vienen desde afuera **(otros componentes)** pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del `state` a otros componentes pasará en una sola dirección y podrá ser **consumida** pero no **modificada**.

Para guardar la información en el estado se usa una función de la clase component llamada `setState` a la cual se le debe pasar un **objeto con la información que se quiere guardar.**

Aunque no se ve, la información está siendo guardada en **dos sitios.** Cada input guarda su propio valor y al tiempo la está guardando en `setState`, lo cual **no es ideal.** Para solucionarlo hay que **modificar los inputs** de un estado **de no controlados a controlados.**

### Para manejar los valores de nuestros inputs:

1. A nuestros inputs, en la función handleChange, le ponemos:
```javascript
this.setState({
            [e.target.name]: e.target.value,
        })
```
- De esta forma crea una variable por cada input

2. A nuestros inputs les ponemos valor:
```javascript
value={this.state.varName}
``` 
- De esta forma no se almacena la variable dos veces

3. Inicializamos una variable state al inicio de nuestro componente:
```javascript
state = {
        varName: '',
        varName2: '',
};
```
De forma opcional, pero **Recomendadamente**, en nuestro método de `handleSubmit`, podemos manejar los datos, los cuales están almacenados en `this.state`