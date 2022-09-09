 import ItemListContainer from "./ItemListContainer";

const Itemlist = ({data = []}) => {
    return(
        data.map(film => <Item key={film.id} info={film} />) 
    );
}

export default ItemListContainer;