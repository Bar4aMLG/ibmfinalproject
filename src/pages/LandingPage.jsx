import React from 'react';
import { Link } from 'react-router-dom';

import bgImage from '../assets/ChatGPT Image Sep 24, 2025, 08_29_16 PM.png';
import './LandingPage.css';


const LandingPage = () => (
  <div
    className="landing-page"
    style={{
      background: `url(${bgImage}) no-repeat center center fixed`,
      backgroundSize: 'cover',
    }}
  >
    <h1 className="display-1 fw-bold text-success text-center mb-4" style={{textShadow: '2px 2px 8px #fff'}}>GreenLeaf Houseplants</h1>
    <p className="lead fs-3 text-center mb-4" style={{maxWidth: '700px', margin: '0 auto'}}>
      Welcome to GreenLeaf, your trusted source for beautiful, healthy houseplants.<br />
      Discover easy-care indoor plants that purify your air and brighten your space.<br />
      Shop now and let nature inspire your home!
    </p>
    <Link to="/products" className="get-started-btn">Get Started</Link>
  </div>
);

export default LandingPage;
