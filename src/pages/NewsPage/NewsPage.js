// NewsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import './NewsPage.css';
import { useLastLocalsContext } from '../../connect/Context';

const NewsPage = () => {

  const { lastLocals } = useLastLocalsContext();

  return (
    <div className="news-page-container">
      <div className="discount-container">
        <p className="discount-text">
          <span className="discount-percent">20%</span> de descuento
        </p>
        <p className="offer-message">
          Haz tu primera reserva y obtén un descuento especial.
        </p>
        <p className="offer-message-2">
          Reserva en tus sitios favoritos
        </p>
      </div>
      <div className="list-news-container">
        {lastLocals.map((local) => (
          <Link to={`/booking/${local._id}`} key={local._id} className="custom-local-link">
            <div className="custom-local-card" key={local._id}>
              <img
                className="custom-local-image"
                src={local.imgUrl}
                alt={local.name}
              />
              <div className="custom-local-details">
                <p className="custom-local-category">{local.discoName}</p>
                <p className="custom-local-category">Categorías: {local.categories}</p>
                <p className="custom-local-deals">Deals: {local.deals}€ - 20%</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <p className="additional-text">
        ¡Descubre nuestras últimas novedades y aprovecha esta oferta exclusiva!
      </p>
    </div>
  );
};

export default NewsPage;
