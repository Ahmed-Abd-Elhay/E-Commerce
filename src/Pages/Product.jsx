import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';



const Product = () => {
    const { allProduct } = useContext(ShopContext);
    const { productId } = useParams();
    const product = allProduct.find((e) => e.id === Number(productId));

    return (
        <div>
            <BreadCrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts category={product.category} />
        </div>
    )
}

export default Product;
