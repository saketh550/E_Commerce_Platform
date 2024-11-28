import { useEffect, useState } from 'react';
import './innerProduct.css';

export default function Products() {

    const [products, setProducts] = useState([]);

    function LoadProducts(url) {
        fetch(url) 
        .then(response=> response.json())
        .then(data=>{
            setProducts(data);
        })
      }

      useEffect(() => {
        LoadProducts('https://fakestoreapi.com/products/category/jewelery');  
      }); 

    return (
        
        <div className='main-box'>
            <div className='first'>
                <div>Men Clothes</div>
                <div>Women Clothes</div>
                <div>Men Watches</div>
                <div>Women Watches</div>
            </div>
            <div className='second'>
                <div className='product-container'>
                    {
                        products.map(product=>(
                            <div className='innerProduct'>
                    <img src={product.image} className="card-img-top"  />

                            </div>
                        ))
                    }
                </div>
                <div className='product-container-two'>
                    <div className='small'>P1</div>
                    <div className='small'>P2</div>
                    <div className='small'>P3</div>
                    <div className='small-no-border'>....</div> 
                </div>
            </div>
        </div>
    );
}

// https://fakestoreapi.com/products/category/men's%20clothing

// https://fakestoreapi.com/products/category/men's%20clothing


