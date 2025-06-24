// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/HomePage'));
const ProductDetail = lazy(() => import('./components/ProductDetail/ProductDetail'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
