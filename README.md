# Clase ObjectArray
![license](https://img.shields.io/badge/license-MIT-blue.svg ) [![Build Status](https://img.shields.io/travis/bifuer/ObjectArray/master.svg)](https://travis-ci.org/bifuer/ObjectArray) [![npm version](https://img.shields.io/npm/v/objectarray.svg)](https://www.npmjs.com/package/objectarray) [![Github release](https://img.shields.io/github/release/bifuer/ObjectArray.svg)](https://github.com/bifuer/ObjectArray) [![npm downloads](https://img.shields.io/npm/dm/objectarray.svg)](https://www.npmjs.com/package/objectarray)

La **Clase ObjectArray** permite instanciar un objeto de tipo ObjectArray, un array de objetos con métodos para insertar, borrar y mover los objetos en el array. [npm](https://www.npmjs.com/package/objectarray)


> La idea trata de tener un Array de Objetos, cuyos objetos tienen una propiedad que los identifica de forma única. Esta propiedad por defecto es 'id'. 
> Al objeto se le dota de una serie de métodos para manejar este array de objetos. 

```javascript
var oa = new ObjectArray();
```
Es posible instanciar el objeto con datos: 
```javascript
var oa = new ObjectArray(
    {id:'a',something:'a...'},
    {id:'c',something:'c...'}
);
```

Esto convertirá a la variable *oa* en un **Array de Objetos**, donde cada objeto que compone el array se identificará mediante una propiedad, por defecto 'id'. Además añade a la instancia una serie métodos para trabajar con el array de objetos.

##Métodos
### ObjectArray.prototype.insert (*element* [, *index*, *pid*])
Inserta un objeto *element* en el array, en la posición indicada por *index*, y si es necesario indicando un *pid*.
+ *element*: objeto a insertar en el arrayObject.
+ *index*: Posición de la inserción. La posión puede ser Integer o String. Un Integer especifica la posición del array, mientas que un String especifica el valor de la propiedad usada para identificar a un objeto del array, si no se especifica un *pid* se toma por defecto 'id'.
+ *pid*: propiedad de identificación del objeto del array. Por defecto es 'id'.

Devuelve una referencia al objeto. 
Si no encuentra *index* el elemento se inserta al final. Siempre se realiza inserción.

```javascript
oa.insert({'id': 'OB-0', 'something' : 'ob-0...'}, 0 );
// Inserta el objeto en la posición 0 del array.
```
```javascript
oa.insert({'id': 'OB-3', 'something' : 'ob-3...'}, 'OB-2' );
// Inserta el objeto en la posición que ocupa el objeto cuyo id='OB-2';
```
```javascript
oa.insert({'id': 'OB-4', 'something' : 'ob-4...'}, 'ob-2...','something' );
// Inserta el objeto en la posición del objeto cuya propiedad 'something'='ob-2...'; 
// Será la posición del objeto que primero coincida.
// Si no se localiza el elemento que se busca, se inserta el último.

```

Si *index* es Integer, inserta el objeto *element* en esta posición. 
Si *index* es String, inserta el objeto *element* en la posición que ocupe el primer elemento cuyo identificador *id* sea igual a *index*.
Podemos especificar un identificador diferente de *id* con el parámetro *pid*. 



### ObjectArray.prototype.insertAfter (*element*, *index* [, *pid*])
Igual que insert, pero inserAfter inserta después de la posición encontrada.

### ObjectArray.prototype.get (*index* [, *pid*])
Devuelve el objeto que ocupa la posición *index*. Si *index* es Integer indica la posición en el array; si es String, será el primer elemento cuyo identificador 'id' sea igual a *index*. En caso de especificar *pid*, devolverá el primer elemento cuya propiedad *pid* sea igual a *index*.
Devuelve undefined si no encuentra nada, si encuentra el elemento lo devuelve.
```javascript
oa.get(0);
// Devuelve el objeto en la posición 0 del array.
```
```javascript
oa.get('OB-2');
// Devuelve el objeto cuyo id='OB-2'
```
```javascript
oa.get('ob-2...','something');
// Devuelve un objeto cuya propiedad 'something'='ob-2...'
```

### ObjectArray.prototype.getAll (*index* [, *pid*])
Su funcionamiento es similar a *ObjectArray.prototype.get()*, pero en lugar de devolver sólo el primer elemento cuyo identificador 'id' sea igual a *index*, devuelve todos los objetos cuyo 'id' sea igual a *index*. En el caso de especificar *pid*, devolverá todos los elementos cuya propiedad *pid* sea igual a *index*.

### ObjectArray.prototype.search (*index* [, *pid*])
Devuelve el indice del primer objeto encontrado cuya propiedad 'id'=*index*. Si se especifica *pid*, se busca en la propiedad *pid* indicada en vez de en 'id'
+ *index*: string del valor de la propiedad 'id' en caso de no especificar *pid*.
+ *pid*: string que especifica la propiedad
> En este método *index* no debe ser Integer.

Devuelve el índice en el array del objeto.

```javascript
oa.search('OB-0');
// Devuelve la posición del objeto en el array.
```

### ObjectArray.prototype.searchAll (*index* [, *pid*])
Funcionamiento similar a *ObjectArray.prototype.search()*, pero en vez de devolver el indice del primer objeto, devuelve los indices de todos los objetos cuya propiedad 'id'=*index*. Si se especifica *pid*, se busca en la propiedad *pid* el valor *index*.

### ObjectArray.prototype.values (*pid*)
Devuelve todos los valores del pid existentes en el ObjectArray.

```javascript
oa.values('id');
```

### ObjectArray.prototype.move (*index*,  *indexTo* [, *pid*])
Mueve el objeto ubicado en la posición *index* a la posición *indexTo*, desplazando el resto de elementos hacia arriba. Si la propiedad que se quiere utilizar para identificar a los objetos es diferente de 'id' se puede utilizar el parámetro *pid*.
+ *index*: integer o string. Integer define la posición en el array, string el valor de la propiedad que tomamos para realizar la comparación. 
+ *indexTo*: integer o string. Integer define la posición en el array, string el valor de la propiedad que tomamos para realizar la comparación. 
+ *pid*: propiedad usada en la identificación del objeto, por defecto es 'id'.

```javascript
oa.move(0, 3);
// Mueve el objeto ubicado en la posición 0 a la 3. Reordenando el array.
```

```javascript
oa.move('OB-1', 3);
// Mueve el objeto con 'id'='OB-1' a la posición 3. Reordenando el array.
```

```javascript
oa.move('OB-1', 'OB-3');
// Mueve el objeto con 'id'='OB-1' a la posición del objeto con 'id'='OB-3. Reordenando el array.
```

### ObjectArray.prototype.moveAfter (*index*, *indexTo* [, *pid*])
Igual que .move() pero moviendo el objeto ubicado en la posición *index* a la **posición después** de *indexTo*.


### ObjectArray.prototype.remove (*index* [, *pid*])
Elimina el objeto de la posición indicada en *index*, si index es Integer. Si es string, elimina el objeto cuya propiedad 'id'=*index*, en el caso de especificar *pid*, elimina el objeto cuya propiedad *pid*=*index*.

Devuelve true si el objeto se ha borrado correctamente.

## Ejemplos
 [Ejemplo en jsfiddle.net](http://jsfiddle.net/lilxelo/krbyhLrL/) - Al final está el código del ejemplo.
 
## Licencia
 MIT
 
 
