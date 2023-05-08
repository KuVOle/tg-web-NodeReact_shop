import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegramm } from '../../hooks/useTelegramm';

const products = [
    { id: 1, titel: 'Джинсы', price: 5000, description: 'синие джинсы' },
    { id: 2, titel: 'Рубашка', price: 6500, description: 'белая' },
    { id: 3, titel: 'Лоссины', price: 900, description: 'черная' },
    { id: 4, titel: 'Куртка', price: 11500, description: 'желтая' },
    { id: 5, titel: 'Кофта', price: 3000, description: 'удобная' },
    { id: 6, titel: 'Носки', price: 300, description: 'теплые' },
    { id: 7, titel: 'Трусы', price: 200, description: 'мужские' },
    { id: 8, titel: 'Кепка', price: 150, description: 'с застежкой' },
    { id: 9, titel: 'Перчатки', price: 750, description: 'влагостойкие' },
    { id: 10, titel: 'Дубленка', price: 50000, description: 'из натурального меха' },
];

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
}

const ProductList = () => {

    const { tgApp } = useTelegramm();
    const [addedItems, setAddedItems] = useState([]);
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];
        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems);

        if (newItems.length === 0) {
            tgApp.MainButton.hide();
        }
        else {
            tgApp.MainButton.show();
            tgApp.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {
                // eslint-disable-next-line
                products.map((item) => (
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        className={'item'}
                    />
                ))}
        </div>
    );
}

export default ProductList;
