import React from 'react';
import { Breadcrumb } from 'antd';
import styles from './ProductBreadcrumb.module.css'
import { Link } from 'react-router-dom';
import { Product } from '../../../../adapters/Product';

interface ProductBreadcrumbProps{
  product: Product
}

const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({product}) => {

  function label() : string {
    if(product.category == 'phone'){
      return 'Celulares'
    }
    return 'Motocicletas';
  }

  return <>
    <Breadcrumb className={styles.li}
    items={[
      {
        title: <Link to={'/?category=' + product.category}>{label()}</Link>,
      },
      {
        title: <Link to={'/?manufacturer=' + product.manufacturer}>{product.manufacturer}</Link>,
      },
      {
        title: <a style={{fontWeight: 'bold'}}>{product.name}</a>,
      },
    ]}
  />
  </>
};

export default ProductBreadcrumb;