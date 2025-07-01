import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizingGuide, setShowSizingGuide] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Review data (жишээ)
  // Бүх барааны review-д зориулсан төрөл
  interface Review {
    user: string;
    rating: number;
    comment: string;
    image: string;
    verified: boolean;
  }

  const allReviews: Record<string, Review[]> = {
    '7': [
      { user: 'Bat-Erdene', rating: 5, comment: 'This Amethyst Camo Tee is really high quality, I wear it every day.', image: '', verified: true },
      { user: 'Saraa', rating: 4, comment: 'The color is brighter than expected, very comfortable.', image: '', verified: true },
      { user: 'Temuujin', rating: 3, comment: 'The size felt a bit big but the quality is good.', image: '', verified: true },
      { user: 'Alex', rating: 5, comment: 'Absolutely love the fit and the camo pattern!', image: '', verified: true },
      { user: 'Emily', rating: 5, comment: 'Super soft and stylish, would buy again.', image: '', verified: true },
      { user: 'Chris', rating: 4, comment: 'Great for workouts, fabric feels premium.', image: '', verified: true },
      { user: 'Olivia', rating: 5, comment: 'My favorite tee for the gym!', image: '', verified: true },
      { user: 'David', rating: 5, comment: 'Perfect for both casual and active wear.', image: '', verified: true }
    ],
    '8': [
      { user: 'Munkh-Erdene', rating: 5, comment: 'The Amethyst Pump Cover is perfect for the gym, great oversized fit.', image: '', verified: true },
      { user: 'Oyun', rating: 4, comment: 'Looks even better than the pictures, fits well.', image: '', verified: true },
      { user: 'Bilguun', rating: 3, comment: 'Thick material, keeps me warm in the cold.', image: '', verified: true },
      { user: 'Samantha', rating: 5, comment: 'Oversized and comfy, just what I wanted.', image: '', verified: true },
      { user: 'Michael', rating: 5, comment: 'The color is amazing and the quality is top-notch.', image: '', verified: true },
      { user: 'Jessica', rating: 4, comment: 'Very warm and stylish, love it!', image: '', verified: true },
      { user: 'Daniel', rating: 5, comment: 'Perfect for chilly mornings at the gym.', image: '', verified: true },
      { user: 'Sophia', rating: 5, comment: 'My go-to pump cover for every session.', image: '', verified: true }
    ],
    '9': [
      { user: 'Solongo', rating: 5, comment: 'The Arctic Camo Pump is the perfect choice for winter.', image: '', verified: true },
      { user: 'Enkhjin', rating: 4, comment: 'Unique design, very comfortable.', image: '', verified: true },
      { user: 'Ganbold', rating: 3, comment: 'The color was a bit lighter than I expected.', image: '', verified: true },
      { user: 'Lucas', rating: 5, comment: 'Super warm and fits perfectly.', image: '', verified: true },
      { user: 'Mia', rating: 5, comment: 'Love the camo look, very trendy.', image: '', verified: true },
      { user: 'Ethan', rating: 4, comment: 'Great for outdoor runs in the cold.', image: '', verified: true },
      { user: 'Ava', rating: 5, comment: 'My friends keep asking where I got it!', image: '', verified: true },
      { user: 'Noah', rating: 5, comment: 'Best winter pump cover I own.', image: '', verified: true }
    ],
    '10': [
      { user: 'Nomin', rating: 5, comment: 'The Heavyweight Shadow Pump Cover is super warm.', image: '', verified: true },
      { user: 'Tuguldur', rating: 4, comment: 'Comfortable to wear, nice color.', image: '', verified: true },
      { user: 'Sodon', rating: 3, comment: 'The size was a bit big for me.', image: '', verified: true },
      { user: 'Liam', rating: 5, comment: 'Very durable and keeps me warm.', image: '', verified: true },
      { user: 'Emma', rating: 5, comment: 'Stylish and practical for cold days.', image: '', verified: true },
      { user: 'Benjamin', rating: 4, comment: 'Love the heavyweight feel.', image: '', verified: true },
      { user: 'Charlotte', rating: 5, comment: 'Perfect for layering in winter.', image: '', verified: true },
      { user: 'James', rating: 5, comment: 'Shadow color is unique and cool.', image: '', verified: true }
    ],
    '11': [
      { user: 'Bayarmaa', rating: 5, comment: 'Amethyst Heavyweight Sweatpants are very warm and high quality.', image: '', verified: true },
      { user: 'Erdene', rating: 4, comment: 'Very comfortable, love the color.', image: '', verified: true },
      { user: 'Saruul', rating: 3, comment: 'Material is good but a bit thick.', image: '', verified: true },
      { user: 'Harper', rating: 5, comment: 'Super soft and cozy, perfect for lounging.', image: '', verified: true },
      { user: 'Elijah', rating: 5, comment: 'Great fit and very warm.', image: '', verified: true },
      { user: 'Amelia', rating: 4, comment: 'Love the heavyweight material.', image: '', verified: true },
      { user: 'Logan', rating: 5, comment: 'My favorite sweatpants for winter.', image: '', verified: true },
      { user: 'Isabella', rating: 5, comment: 'So comfortable, I wear them all the time.', image: '', verified: true }
    ],
    '12': [
      { user: 'Temuulen', rating: 5, comment: 'Arctic Camo Heavyweight Sweatpants are perfect for winter.', image: '', verified: true },
      { user: 'Maral', rating: 4, comment: 'Unique style, fits well.', image: '', verified: true },
      { user: 'Batbold', rating: 3, comment: 'The color was a bit too light for me.', image: '', verified: true },
      { user: 'Mason', rating: 5, comment: 'Super warm and stylish.', image: '', verified: true },
      { user: 'Evelyn', rating: 5, comment: 'Love the camo print, very trendy.', image: '', verified: true },
      { user: 'Alexander', rating: 4, comment: 'Great for outdoor activities.', image: '', verified: true },
      { user: 'Avery', rating: 5, comment: 'Best sweatpants I have owned.', image: '', verified: true },
      { user: 'Ella', rating: 5, comment: 'Perfect for cold weather.', image: '', verified: true }
    ],
    '13': [
      { user: 'Suvd', rating: 5, comment: 'Sunwashed Sweatpants are super soft and comfy.', image: '', verified: true },
      { user: 'Bat-Orgil', rating: 4, comment: 'Very comfortable, love the color.', image: '', verified: true },
      { user: 'Enkhzul', rating: 3, comment: 'The size was a bit big for me.', image: '', verified: true },
      { user: 'Jack', rating: 5, comment: 'Love the sunwashed look, very unique.', image: '', verified: true },
      { user: 'Grace', rating: 5, comment: 'So soft and cozy, perfect for home.', image: '', verified: true },
      { user: 'Henry', rating: 4, comment: 'Great fit and color.', image: '', verified: true },
      { user: 'Chloe', rating: 5, comment: 'My go-to pants for relaxing.', image: '', verified: true },
      { user: 'Lucas', rating: 5, comment: 'Super comfortable and stylish.', image: '', verified: true }
    ]
  };

  // Color options for Seam Shorts
  const seamShortsColors = [
    { name: 'Navy Blue', value: 'blue' },
    { name: 'Onyx Black', value: 'black' },
    { name: 'Mocha', value: 'brown' },
    { name: 'Forest Green', value: 'green' },
    { name: 'Cherry Red', value: 'red' },
    { name: 'All', value: '' },
  ];
  const isSeamShorts = product.id === '14';

  // Color options for Tactical Scorpion Cargo
  const tacticalCargoColors = [
    { name: 'Black', value: 'black' },
    { name: 'Beige', value: 'beige' },
  ];
  const isTacticalCargo = product.id === '15';

  const reviews: Review[] = allReviews[product.id] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Products</span>
      </Link>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Thumbnail Images */}
          <div className="flex flex-row lg:flex-col mt-6 lg:mt-0 lg:mr-4 space-x-4 lg:space-x-0 lg:space-y-4 overflow-x-auto lg:overflow-visible">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative h-20 w-20 lg:h-16 lg:w-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedImageIndex
                    ? 'border-blue-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-96 lg:h-[600px] object-cover object-center rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="mt-10 lg:mt-0 lg:pl-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            
            <div className="mt-3">
              <p className="text-3xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="mt-4">
              {product.inStock ? (
                <p className="text-green-600">In stock, ready to ship</p>
              ) : (
                <p className="text-red-600">Out of Stock</p>
              )}
            </div>
          </div>

          {/* Color Picker for Seam Shorts */}
          {isSeamShorts && (
            <div className="mb-4">
              <div className="flex items-center gap-2">
                {seamShortsColors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selectedImageIndex === idx ? 'border-blue-600 scale-110' : 'border-gray-300'
                    }`}
                    style={{
                      background:
                        color.value === 'blue' ? '#1e40af' :
                        color.value === 'black' ? '#222' :
                        color.value === 'brown' ? '#7c4a03' :
                        color.value === 'green' ? '#166534' :
                        color.value === 'red' ? '#b91c1c' :
                        color.value === '' ? 'linear-gradient(90deg,#1e40af,#222,#7c4a03,#166534,#b91c1c)' : '#fff',
                    }}
                    aria-label={color.name}
                  >
                    {selectedImageIndex === idx && (
                      <span className="block w-3 h-3 bg-white rounded-full border border-blue-600" />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
                {seamShortsColors[selectedImageIndex]?.name}
              </div>
            </div>
          )}

          {/* Color Picker for Tactical Scorpion Cargo */}
          {isTacticalCargo && (
            <div className="mb-4">
              <div className="flex items-center gap-2">
                {tacticalCargoColors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      selectedImageIndex === idx ? 'border-blue-600 scale-110' : 'border-gray-300'
                    }`}
                    style={{
                      background:
                        color.value === 'black' ? '#222' :
                        color.value === 'beige' ? '#e5decf' : '#fff',
                    }}
                    aria-label={color.name}
                  >
                    {selectedImageIndex === idx && (
                      <span className="block w-3 h-3 bg-white rounded-full border border-blue-600" />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
                {tacticalCargoColors[selectedImageIndex]?.name}
              </div>
            </div>
          )}

          {/* Size Picker for T-Shirts */}
          {product.category === 'T-Shirt' && product.sizes && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`px-3 py-1 rounded border text-sm font-medium transition-colors duration-200 ${selectedSize === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizing Guide Table for T-Shirts (collapsible) */}
          {product.category === 'T-Shirt' && product.sizingGuide && (
            <div className="mb-6">
              <button
                type="button"
                className="block text-sm font-semibold text-blue-600 dark:text-blue-400 underline mb-1 focus:outline-none"
                onClick={() => setShowSizingGuide((prev) => !prev)}
              >
                {showSizingGuide ? 'Hide Sizing Guide' : 'Show Sizing Guide'}
              </button>
              {showSizingGuide && (
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full text-xs border border-gray-200 dark:border-gray-700 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Size</th>
                        <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Length (cm)</th>
                        <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Width (cm)</th>
                        <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Sleeve (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizingGuide.map((row: any) =>
                        'length' in row && 'width' in row ? (
                          <tr key={row.size}>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.size}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.length}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.width}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.sleeve}</td>
                          </tr>
                        ) : null
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Size Picker for SweetPants */}
          {product.category === 'SweetPants' && product.sizes && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`px-3 py-1 rounded border text-sm font-medium transition-colors duration-200 ${selectedSize === size ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizing Guide Table for SweetPants and Cargo Pants (collapsible) */}
          {product.category === 'SweetPants' && product.sizingGuide && (
            <div className="mb-6">
              <button
                type="button"
                className="block text-sm font-semibold text-blue-600 dark:text-blue-400 underline mb-1 focus:outline-none"
                onClick={() => setShowSizingGuide((prev) => !prev)}
              >
                {showSizingGuide ? 'Hide Sizing Guide' : 'Show Sizing Guide'}
              </button>
              {showSizingGuide && (
                <div className="overflow-x-auto mt-2">
                  {product.id === '15' ? (
                    // Tactical Scorpion Cargo Pants: full guide
                    <table className="min-w-full text-xs border border-gray-200 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Size</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Side Pants Length (cm)</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Elastic Waist (cm)</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Hips (cm)</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Knee Width (cm)</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Pants Length (cm)</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Front Rise (cm)</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Back Rise (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.sizingGuide.map((row: any) => (
                          <tr key={row.size}>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.size}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.sidePantsLength}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.elasticWaist}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.hips}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.kneeWidth}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.pantsLength}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.frontRise}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.backRise}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    // SweetPants (legacy): length/waist only
                    <table className="min-w-full text-xs border border-gray-200 dark:border-gray-700 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Size</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Length (cm)</th>
                          <th className="px-2 py-1 font-semibold text-gray-700 dark:text-white border-b border-gray-200 dark:border-gray-700">Waist (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.sizingGuide.map((row: any) => (
                          <tr key={row.size}>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.size}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.length}</td>
                            <td className="px-2 py-1 border-b border-gray-200 dark:border-gray-700 text-center text-gray-900 dark:text-white">{row.width}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full bg-black border border-white text-white hover:bg-gray-900 disabled:bg-gray-700 disabled:border-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed font-medium py-3 px-6 rounded-md transition-colors duration-200 text-lg mb-4"
            style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      {/* Reviews - moved below product info */}
      <div className="mb-8 flex flex-col items-center" style={{ marginTop: '10px' }}>
        <div className="relative w-full overflow-x-hidden">
          <div className="flex flex-row gap-2 w-max animate-marquee-x">
            {[...reviews, ...[...reviews].reverse()].map((review, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[120px] max-w-[140px] bg-gray-50 dark:bg-gray-800 p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mx-1">
                <span className="font-semibold text-gray-800 dark:text-white flex items-center gap-1 text-xs">
                  {review.user}
                  {review.verified && (
                    <span className="inline-flex items-center px-1 py-0.5 rounded bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-[10px] font-semibold ml-1">
                      <svg className="w-3 h-3 mr-0.5 text-green-500 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
                      Verified
                    </span>
                  )}
                </span>
                <span className="flex mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </span>
                <p className="text-gray-700 dark:text-gray-200 text-center text-[10px] mb-1 leading-tight">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;