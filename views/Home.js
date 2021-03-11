export default() =>{
    const views =`
        <h1>Hola Mundo</h1>
        <p>hola estoy usando SPA</p>
    `;

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    return divElement;
}