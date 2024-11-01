import products from '@/randomProducts/products'
import { useRouter } from 'next/router';
import React from 'react'

export default function ProductsPage() {
    const router = useRouter();
    const renderProducts = (products)=>{
        return products.map((product)=>{
            return <div key={product.name} className='products-container' onClick={()=>handleClickProduct(product.id)}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
            </div>
        })
    }
    const handleClickProduct = (productId)=>{
        router.push(`/products/${productId}`);
    }
  return (
    <div>{renderProducts(products)}</div>
  )
}
