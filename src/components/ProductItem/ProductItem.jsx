import React from 'react';
import './ProducItem.css';
import Button from '../Button/Button';
const ProductItem = ({ product, className, onAdd }) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'} />
            <div className={'titel'}>{product.titel}</div>
            <div className={'decription'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоймость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в карзину
            </Button>
        </div>
    );
}

export default ProductItem;
