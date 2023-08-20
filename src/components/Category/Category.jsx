import React from 'react';
import './Category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Category = ({ category }) => {
    const { id, name, img, eight_ml, eight_ml_old, six_ml, six_ml_old } = category;

    return (
        <div className="col">
            <div className="card h-100 shadow border-0">
                <img src={img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text">
                        <div className='row row-cols-2 row-cols-md-2 g-4'>
                            <div className="col">
                                <h5 className='fw-bold text-warning txt'>৳{eight_ml_old}</h5>
                                <h5 className='fw-bold text-warning'>৳{eight_ml}</h5>
                            </div>
                            <div className="col text-end">
                                <a className='awesome' type='button' href='/'>
                                    <FontAwesomeIcon className='fs-3' icon={faCartShopping} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-warning w-100 my-3">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Category;