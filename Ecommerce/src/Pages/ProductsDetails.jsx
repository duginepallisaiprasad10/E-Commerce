import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { globalContext } from '../Context/MyContext';
import banner from '../Images/table.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../ReduxToolKit/productsSlice';

export default function ProductDetails() {
  const { id } = useParams();
  const { data } = useContext(globalContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('description');
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]); // ✅ Holds submitted reviews
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      quantity: quantity,
    };
    dispatch(addToCart(cartProduct));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim() !== '') {
      setReviews((prev) => [...prev, reviewText.trim()]);
      setReviewText('');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = data.find((item) => item.id.toString() === id);
  if (!product) return null;

  const related = data.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const renderStars = (rating = 4) => {
    const filled = Math.floor(rating);
    const empty = 5 - filled;
    return (
      <>
        {'⭐'.repeat(filled)}
        {'☆'.repeat(empty)}
      </>
    );
  };

  return (
    <>
      {showMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Product added to cart!
        </div>
      )}

      <div className="relative w-full mb-10  justify-content-center ">
        <img src={banner} alt="Banner" className="w-full h-[260px] object-cover "  />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold px-6 py-3 rounded-lg shadow-1lg mt-12">
            {product.productName}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <img src={product.imgUrl} alt={product.productName} className="w-full h-[400px] object-contain rounded-xl" />

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.productName}</h1>
            <div className="mb-2 text-yellow-500 text-lg">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-600 ml-2">
                ({product.rating || 4.5} Rating)
              </span>
            </div>

            <p className="text-xl mb-2">Category: {product.category}</p>
            <p className="text-2xl text-blue-600 mb-2">₹{product.price}</p>
            <p className="text-gray-700 mt-5">{product.description.slice(0, 60)}...</p>

            <div className="mb-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-400 rounded-lg px-3 py-2 w-24 text-lg mt-5 text-center shadow-sm"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 my-2 rounded-lg cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex gap-6 border-b pb-2">
            <button
              onClick={() => setActiveTab('description')}
              className={activeTab === 'description' ? 'text-blue-600 font-bold' : 'text-gray-600'}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={activeTab === 'reviews' ? 'text-blue-600 font-bold' : 'text-gray-600'}
            >
              Reviews
            </button>
          </div>

          <div className="mt-4">
            {activeTab === 'description' && (
              <p className="text-gray-700">{product.description || ''}</p>
            )}

            {activeTab === 'reviews' && (
              <div>
                {/* <h2 className="text-2xl font-bold mb-2">Reviews</h2> */}

                <textarea
                  placeholder="Write your review..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2"
                />
                <button
                  onClick={handleReviewSubmit}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
                >
                  Submit Review
                </button>

                <div className="space-y-3 mt-4">
                  {reviews.length === 0 ? (
                    <p className="text-gray-500">No reviews yet. Be the first to write one!</p>
                  ) : (
                    reviews.map((rev, index) => (
                      <div key={index} className="bg-gray-100 p-3 rounded shadow">
                        {rev}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">You might also like</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {related.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded shadow-md p-4 max-w-[320px] w-full"
                style={{
                  flex: '1 1 calc(33.333% - 1.5rem)',
                  minWidth: '280px',
                }}
              >
                <Link to={`/product/${item.id}`}>
                  <img src={item.imgUrl} alt={item.productName} className="w-full h-[250px] object-contain mb-2" />
                </Link>
                <p className="font-semibold text-lg">{item.productName}</p>
                <p className="text-yellow-500 text-sm">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-blue-500 text-lg font-medium">₹{item.price}</p>
                  <button
                    onClick={() => {
                      dispatch(addToCart({ ...item, quantity: 1 }));
                      setShowMessage(true);
                      setTimeout(() => setShowMessage(false), 2000);
                    }}
                    className="bg-blue-700 text-white px-3 py-1 rounded-full text-lg font-semibold hover:bg-blue-800 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

