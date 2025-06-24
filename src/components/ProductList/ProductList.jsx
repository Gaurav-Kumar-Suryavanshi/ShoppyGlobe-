import { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ProductItem from '../ProductItem/ProductItem';

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products, loading, error } = useProducts('https://dummyjson.com/products');

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}