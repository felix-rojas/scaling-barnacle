# Deployment en gcloud

En este pequeño documento les muestro cómo hacer un deployment sencillo utilizando app engine.

En este caso asumimos que usas una aplicación web con:
	- Nodejs versión 16
	- Express
	- npm
	- EJS
	- MySQL

## Prerequisitos

1. Una cuenta gcloud con verificación por tarjeta de crédito. Esta verificación *es gratuita*. No se harán cargos, pero es importante que **no selecciones cargos automáticos**
2. Un proyecto existente

## Pasos a seguir

### Prepara tu aplicación

Revisa los scripts de inicio en tu aplicación. Si utilizas algún paquete como nodemon para correr tu aplicación, asegúrate de cambiarlo sólo para desarrollo. 

Por ejemplo, `npm start` tiene probablemente la directiva `nodemon app.js`.

Cambia la directiva simplemente a `node app.js`

App engine utiliza la directiva `npm start` para correr tu aplicación. Recuerda que nodemon está constantemente escuchando todos los cambios que realizas mientras codificas y no queremos eso en gcloud.

Ahora vamos a editar `index.js` o `app.js` para que al final nos imprima la dirección que vamos a utilizar para ver cómo corre. Al final de tu archivo agrega lo siguiente:

```js
console.log()

```

### Sube tu aplicación
Subir tu aplicación es muy sencillo si tienes un repositorio en línea con versiones funcionales.

En el shell de Gcloud: `git clone https://repo-online/usuario/nombre-repo.git`. Este paso literalmente clona la rama **main** de tu repositorio.

Una vez clonado, recuerda correr `npm i` para instalar todas las dependencias necesarias para que tu programa corra adecuadamente.

 
