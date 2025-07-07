import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';


import video1 from '../video/1.mov';
import video2 from '../video/2.mov';
import video3 from '../video/3.mov';
import video4 from '../video/4.mov';
import video5 from '../video/5.mov';

const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dark Matter
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
         Unleash your potential with our elite range of gym wear and accessories.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-6">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md transition-colors duration-200"
          >
            <option value="all">All Categories</option>
            <option value="T-Shirt">T-Shirts</option>
            <option value="SweetPants">SweetPants</option>
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-2">
          <ArrowUpDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name')}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md transition-colors duration-200"
          >
            <option value="name">Sort by Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </p>
      </div>

      {/* Product Grid */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* V Formation Video Footer */}
      <div className="w-full flex flex-col items-center mt-20 mb-8">
        <div className="flex flex-row justify-center items-end space-x-8
          max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
          {/* Leftmost video (bigger) */}
          <video
            src={video1}
            className="w-40 h-56 object-cover rounded-xl shadow border-2 border-blue-200 dark:border-blue-100 hover:scale-105 transition-transform duration-200 cursor-pointer opacity-95 max-sm:w-64 max-sm:h-40 max-sm:mx-auto"
            onClick={e => (e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause())}
            controls={false}
            muted
            preload="metadata"
            poster=""
          />
          {/* Left inner video */}
          <video
            src={video2}
            className="w-48 h-64 object-cover rounded-xl shadow border-2 border-blue-200 dark:border-blue-100 hover:scale-105 transition-transform duration-200 cursor-pointer opacity-98 max-sm:w-64 max-sm:h-40 max-sm:mx-auto"
            onClick={e => (e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause())}
            controls={false}
            muted
            preload="metadata"
            poster=""
          />
          {/* Center video (largest, but not bigger than inner) */}
          <video
            src={video3}
            className="w-52 h-72 object-cover rounded-2xl shadow-lg border-2 border-blue-200 dark:border-blue-100 hover:scale-105 transition-transform duration-200 cursor-pointer max-sm:w-64 max-sm:h-40 max-sm:mx-auto"
            onClick={e => (e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause())}
            controls={false}
            muted
            preload="metadata"
            poster=""
          />
          {/* Right inner video */}
          <video
            src={video4}
            className="w-48 h-64 object-cover rounded-xl shadow border-2 border-blue-200 dark:border-blue-100 hover:scale-105 transition-transform duration-200 cursor-pointer opacity-98 max-sm:w-64 max-sm:h-40 max-sm:mx-auto"
            onClick={e => (e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause())}
            controls={false}
            muted
            preload="metadata"
            poster=""
          />
          {/* Rightmost video (bigger) */}
          <video
            src={video5}
            className="w-40 h-56 object-cover rounded-xl shadow border-2 border-blue-200 dark:border-blue-100 hover:scale-105 transition-transform duration-200 cursor-pointer opacity-95 max-sm:w-64 max-sm:h-40 max-sm:mx-auto"
            onClick={e => (e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause())}
            controls={false}
            muted
            preload="metadata"
            poster=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
