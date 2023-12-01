import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../slike/slika1.jpg';
import Image2 from '../slike/slika2.jpeg';
import '../Glavna.css';

const Glavna = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4">Dobrodošli na ProSport</h1>
      <p className="lead">
        FitZone je vaša destinacija za postizanje zdravog života kroz fitness, pravilnu ishranu i motivaciju.
      </p>
      <p>
        Naša misija je pružiti vam alate i resurse koji će vam pomoći da postignete svoje fitness ciljeve.
      </p>
      <p>
        Pregledajte naš <Link to="/o-nama">O nama</Link> da saznate više o našem timu i našoj viziji.
      </p>
      <p>
        Za informacije o ishrani i treningu, posjetite naše stranice <Link to="/ishrana">Ishrana</Link> i{' '}
        <Link to="/trening">Trening</Link>.
      </p>
      <div className="row">
        <div className="col-md-6">
          <Link to="/register" className="btn btn-primary mb-3">Pridruži se</Link>
          <div className="position-relative">
            <img src={Image1} className="img-fluid rounded hover-effect" alt="Slika 1" />
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="position-relative">
            <img src={Image2} className="img-fluid rounded hover-effect-second" alt="Slika 2" />
            <div className="image-overlay-second"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glavna;
