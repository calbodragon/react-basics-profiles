## Ciclo de vida de un Componente

Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

### Montaje:

- Representa el momento donde se inserta el código del componente en el DOM.

- Se llaman tres métodos: constructor, render, componentDidMount.

### Actualización:

- Ocurre cuando los props o el estado del componente cambian.

- Se llaman dos métodos: render, componentDidUpdate.

### Desmontaje:

- Nos da la oportunidad de hacer limpieza de nuestro componente.

- Se llama un método: componentWillUnmount.