import React, { useContext } from 'react'
import { MyContext } from '../../context'
import styled from 'styled-components';

function ItemCard() {

    const { products } = useContext(MyContext)

    return (
        <div>
            <h1 className='title'>Productos</h1>
            <ContenedorGrid>
                {products.map(producto => (
                    <ContenedorTarjeta className="card card_contenido" key={producto.idLista_de_productos}>
                        <img src={producto.imagen} className="card-img-top" alt="..." />
                        <div className="card-body card_borde">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Price: ${producto.precio}</p>
                            <p className="card-text categoria-card"><small className="text-muted">{producto.categoria}</small></p>
                        </div>
                    </ContenedorTarjeta>
                ))
                }
            </ContenedorGrid>
        </div>

    )
}

const ContenedorTarjeta = styled.div`
width: max-content;
`;

const ContenedorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 600px));
  grid-template-rows: repeat(2, 1fr);
  gap: 50px;
`;


export default ItemCard