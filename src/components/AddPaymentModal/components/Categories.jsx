import React, { useState } from 'react';
import { categories } from '../../../static/data.js';

const Categories = ({ handler, isOpen, setMenu }) => {
    const [categoryName, setCategoryName] = useState('other');

    const closeModal = () => {
        setMenu(false);
    };

    const setCategory = (category) => {
        setCategoryName(category);

        handler({
            target: {
                name: 'category',
                value: category
            }
        });
    };

    return (
        <div className="add-payment-modal__categories categories grid-menu">
            <button className="grid-menu__btn " onClick={() => setMenu(true)} style={{backgroundColor: categories[categoryName].color} }>
                <img src={categories[categoryName].img} alt={categoryName}/>
            </button>

            <div
                className={isOpen ? 'grid-menu__wrap active' : 'grid-menu__wrap'}
                onClick={() => closeModal()}>
                <div className="grid-menu__content" onClick={(e) => e.stopPropagation()}>
                    {Object.entries(categories).map((elem, i) => (
                        <button
                        key={i}
                        className="grid-menu__element"
                        onClick={() => {
                            setCategory(elem[0]);
                            closeModal();
                        }}
                        style={{backgroundColor: elem[1].color}}>
                            <img src={elem[1].img} alt={elem[0]} />
                        </button>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Categories;
