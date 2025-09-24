import React from 'react';
import copilotBg from '../assets/Copilot_20250924_203729.png';
import img1 from '../assets/img1.jpg';
import copilotImg from '../assets/Copilot_20250924_203729.png';
import chatgptImg from '../assets/ChatGPT Image Sep 24, 2025, 08_29_16 PM.png';
import reactImg from '../assets/react.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 15,
    category: 'Low Light',
    image: img1,
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 18,
    category: 'Flowering',
    image: copilotImg,
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 12,
    category: 'Air Purifying',
    image: chatgptImg,
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 14,
    category: 'Air Purifying',
  image: copilotImg,
  },
  {
    id: 5,
    name: 'ZZ Plant',
    price: 20,
    category: 'Low Light',
    image: copilotImg,
  },
  {
    id: 6,
    name: 'Orchid',
    price: 25,
    category: 'Flowering',
    image: chatgptImg,
  },
];

const categories = ['Low Light', 'Flowering', 'Air Purifying'];

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);

  return (
    <div
      className="container-fluid mt-4"
      style={{
        background: `url(${copilotBg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        borderRadius: '16px',
        minHeight: '100vh',
      }}
    >
  <h2 className="mb-4 text-white">Houseplants for Sale</h2>
      {categories.map(category => (
        <div key={category} className="mb-5">
          <h4 className="text-center text-white">{category}</h4>
          <div className="row justify-content-center">
            {plants.filter(plant => plant.category === category).map(plant => (
              <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={plant.id}>
                <div className="card h-100 w-100" style={{maxWidth: '320px'}}>
                  <img src={plant.image} className="card-img-top" alt={plant.name} style={{height: '180px', objectFit: 'contain'}} />
                  <div className="card-body d-flex flex-column">
                    <div className="text-center">
                      <h5 className="card-title text-dark">{plant.name}</h5>
                      <p className="card-text text-dark">${plant.price}</p>
                    </div>
                    <button
                      className="btn btn-success mt-auto"
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
