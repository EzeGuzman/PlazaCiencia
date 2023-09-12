import React from 'react';
import Logo from './logo.png';
import './Partners.css';

const Partners = () => {
  return (
    <section className="partners">
      <h2 className="title__partners">Patrocinadores</h2>
      <div className="card__container">
        <div className="card">
          <div className="img__container">
            <img src={Logo} alt="Logo Lorem" className="logo__partner" />
          </div>
          <div className="partner__name">La Matanza</div>
          <div className="partner__description">Municipio de La Matanza</div>
        </div>
        <div className="card">
          <div className="img__container">
            <img src={Logo} alt="Logo Lorem" className="logo__partner" />
          </div>
          <div className="partner__name">La Matanza</div>
          <div className="partner__description">Municipio de La Matanza</div>
        </div>
        <div className="card">
          <div className="img__container">
            <img src={Logo} alt="Logo Lorem" className="logo__partner" />
          </div>
          <div className="partner__name">La Matanza</div>
          <div className="partner__description">Municipio de La Matanza</div>
        </div>
        <div className="card">
          <div className="img__container">
            <img src={Logo} alt="Logo Lorem" className="logo__partner" />
          </div>
          <div className="partner__name">La Matanza</div>
          <div className="partner__description">Municipio de La Matanza</div>
        </div>
        <div className="card">
          <div className="img__container">
            <img src={Logo} alt="Logo Lorem" className="logo__partner" />
          </div>
          <div className="partner__name">La Matanza</div>
          <div className="partner__description">Municipio de La Matanza</div>
        </div>
        <div className="card">
          <div className="img__container">
            <img src={Logo} alt="Logo Lorem" className="logo__partner" />
          </div>
          <div className="partner__name">La Matanza</div>
          <div className="partner__description">Municipio de La Matanza</div>
        </div>
        <div className="card">
          <div className="img__container">
            <img src={Logo} alt="Logo Lorem" className="logo__partner" />
          </div>
          <div className="partner__name">La Matanza</div>
          <div className="partner__description">Municipio de La Matanza</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
