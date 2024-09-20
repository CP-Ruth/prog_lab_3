//render de la vista cartegorias

export const renderCategories = ()=>{
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");

    ulList.innerHTML = `
            <li id="Todo">Todos los productos</li>
            <li id="Hambuguesas">Hambuguesas</li>
            <li id="Papas">Papas</li>
            <li id="Gaseosas">Gaseosas</li>
            <li id="mayorPrecio">Mayor precio</li>
            <li id="menorPrecio">Menor precio</li>
    `
    //añadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click", ()=>{
            handleClick(liElement);
        });
    });

    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (element)=>{
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive");
            }else{
                if(element=== el){
                    el.classList.add("liActive");
                }
            }
        })
    };
};