import React from 'react'
import { useRouter } from "next/router";
import products from '@/randomProducts/products';

export default function index() {
    const router = useRouter()
    const productId = router.query.product
  return (
      <div>
          <h2>{products[productId].name}</h2>
          <h3>{products[productId].price}</h3>
          <p>{products[productId].description}</p>
      </div>
  );
}
