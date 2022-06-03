import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';



export const saludar = (nombre = 'sin nombre') => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} ! Welcome again...`;

    document.body.append(h1);

    // referencia de la imagen
    // Creamos etiqueta img
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo
    // document.body.append(img);

}