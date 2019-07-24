## Levantamiento del estado


Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.


Pequeño resumen de la primera parte:
Ahora guardaremos las variables en el ProfileNewComponent.js que contiene el formulario y los perfiles, segun esto:

1. ProfileNewComponent.js

- Inicializamos el state y creamos un objeto form, con todos sus atributos inicializados vacíos.
- Creamos el método handleChange para que cree una copia, la edite y la guarde en el state.form cada que suceda el evento onchange
**Dentro del render**
- Mandamos como props cada uno de los states del form a ProfileComponent
- Mandamos como props el arreglo del state.form a ProfileForm para que refleje el valor
- Declaramos el atributo onchange en BadgeForm para que llame al metodo handleChange

2. En ProfileComponent.js

- Mostramos cada uno de los valores recibidos como this.props.name dentro del render

3. En el ProfileFormComponent

- Mostramos cada posicion en el atributo value con this.props.formValues.value
- Declaramos que al hacer un cambio se vera reflejado en el change padre, mediante el onchange hijo