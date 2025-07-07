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
  // interface Review {
  //   user: string;
  //   rating: number;
  //   comment: string;
  //   image: string;
  //   verified: boolean;
  // }

  // const allReviews: Record<string, Review[]> = {};

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

  // Color options for Scorpion Acid Wash Stringer
  const isScorpionStringer = product.id === '16';
  const scorpionStringerColors = [
    { name: 'White', value: 'white', bg: '#fff', border: '#222', imageIdx: 0 },
    { name: 'Black', value: 'black', bg: '#222', border: '#fff', imageIdx: 2 },
  ];

  const reviews: any[] = [];

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
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-200">
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

          {/* Color Picker for Scorpion Acid Wash Stringer */}
          {isScorpionStringer && (
            <div className="mb-4">
              <div className="flex items-center gap-2">
                {scorpionStringerColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedImageIndex(color.imageIdx)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selectedImageIndex === color.imageIdx ? 'border-blue-600 scale-110' : 'border-gray-300'}`}
                    style={{ background: color.bg, borderColor: color.border }}
                    aria-label={color.name}
                  >
                    {selectedImageIndex === color.imageIdx && (
                      <span className="block w-3 h-3 bg-white rounded-full border border-blue-600" />
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
                {scorpionStringerColors.find(c => c.imageIdx === selectedImageIndex)?.name}
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
            className="w-full bg-white border border-black text-black hover:bg-black hover:text-white dark:bg-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 dark:disabled:bg-gray-700 dark:disabled:border-gray-500 dark:disabled:text-gray-400 disabled:cursor-not-allowed font-medium py-3 px-6 rounded-md transition-colors duration-200 text-lg mb-4"
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