

export default function NewArrivals() {
  const { data } = useContext(globalContext);
  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch(); // ✅ Initialize dispatch

  const handleAddToCart = (item) => {
    const product = {
      ...item,
      quantity: 1,
    };
    dispatch(addToCart(product)); // ✅ Add to cart via Redux

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const Arrivals = data.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );

  return (
    <div className="my-10 px-4">
      {showMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Product added to cart!
        </div>
      )}
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">New Arrivals</h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {Arrivals.map((item, index) => {
          const isLastCardCentered =
            Arrivals.length % 3 === 1 && index === Arrivals.length - 1;

          return (
            <div
              key={item.id}
              className={`bg-white shadow-lg rounded-xl w-90 max-w-sm overflow-hidden group relative ${
                isLastCardCentered ? "md:col-start-2" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative">
                {/* Heart Icon */}
                <span className="absolute top-3 right-3 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition">
                  <FaHeart size={20} />
                </span>

                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="w-full h-78 object-contain p-2"
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {item.productName}
                </h2>

                {/* Rating */}
                <div className="flex items-center text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} />
                  ))}
                </div>

                {/* Price and + button */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-lg font-bold text-green-700">
                    ₹{item.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 rounded-full text-lg font-medium cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
