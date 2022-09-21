import Button from 'react-bootstrap/Button';
import React,{useState} from 'react';
const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial );

    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }

return (
    <div className='mt-3 mb-3'>
       <Button variant="dark" disabled={count <=1} onClick={decrease} className='mr-3' style={{ margin: '4px'}}>-</Button>
       <span style={{ margin: '4px'}}>{count}</span>
       <Button variant="dark" disabled={count >= stock} onClick={increase} className='ml-3' style={{ margin: '4px'}}>+</Button>
       <div>
        <Button variant="dark" disabled={count <= 0} onClick={() => onAdd(count) }>Agregar al carrito</Button>
       </div>
    </div>
)
}
export default ItemCount