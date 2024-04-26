import React, { useState } from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = ({ expense }) => {
    const categories = [...new Set(expense && expense?.map((exp) => exp.category))];


    return (
        <div className='categories-parent'>
            <p className='category-header'>Categories</p>
            <div className='categories-card'>
                {categories.map((category) => (
                    <Link key={category} to={`/category/${category}`}>
                        <div key={category} className="category-card">
                            <p>{category}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories;
