const ItemDetail = ({item}) => (
    <div className="detailedInfo">
        <div>
            <h2> Información detallada</h2>
            <p>{item.nombre}</p>
            <h3>{item.descripcion}</h3>
            <p>{item.precio}</p>
        </div>

    </div>

)

export default ItemDetail