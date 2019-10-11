import React, { useState} from 'react';

export default function Formulario({getData}){
    const [ categoria, setCategoria] = useState({
        categoria:'general'
    });
    // const [ pais, setPais] = useState({
    //     pais:'ar'
    // });

 
    const cambiarCategoria = (e) =>{
        const categSeleccionada = e.target.value;
        setCategoria(categSeleccionada);
        getData(categSeleccionada)
                 
    }

    // const cambiarPais = (e) =>{
    //     const paisSeleccionado = e.target.value;
    //     setPais(paisSeleccionado)
    //     getData(paisSeleccionado)
    // }
    
    return(
        <div className="buscador row">
            <div className="col-sm-6 lg-12">
                <form>
                    <h5>Encuentra noticias por categoria</h5>
                    <div className="">
                        <select 
                            onChange={cambiarCategoria}
                        >
                            <option value="general">General</option>
                            <option value="business">Negocios</option>
                            <option value="entertaiment">Entretenimiento</option>
                            <option value="health">Salud</option>
                            <option value="science">Ciencia</option>
                            <option value="sport">Deportes</option>
                            <option value="technology">Tecnología</option>
                        </select>
                    </div>

                    {/* <h5>Elige pais de noticias:</h5>
                    <div className="">
                        <select 
                            onChange={cambiarPais}
                        >
                            <option value="ar">Argentina</option>
                            <option value="us">EEUU</option>
                            <option value="br">Brasil</option>
                            <option value="ve">Venezuela</option>
                            <option value="fr">Francia</option>
                            <option value="jp">Japon</option>
                            <option value="rs">Rusia</option>
                        </select>
                    </div> */}
                </form>
            </div>
        </div>
    )
}