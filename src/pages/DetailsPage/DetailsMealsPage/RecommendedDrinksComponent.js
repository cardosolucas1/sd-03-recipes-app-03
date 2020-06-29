import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DetailsPageContext } from '../DetailsPageProvider';
import './RecommendedDrinksComponent.css';

const RecommendedDrinksComponent = (props) => {
  const { name, category, img, id } = props.recommended;
  const { index } = props;
  const { pathName } = useContext(DetailsPageContext);
  const changePageURL = () => {
    if (pathName.includes('/bebidas')) return 'comidas';
    return 'bebidas';
  };
  return (
    <div className="recommended-drinks-card">
      <Link to={`/${changePageURL()}/${id}`}>
        <div>
          <img src={img} alt={name} width="100%" height="50%" />
          <h5>{category}</h5>
          <h4 data-testid={`${index}-recomendation-title`}>{name}</h4>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedDrinksComponent;

RecommendedDrinksComponent.propTypes = {
  index: PropTypes.number,
  recommended: PropTypes.objectOf(PropTypes.any).isRequired,
};

RecommendedDrinksComponent.defaultProps = {
  index: undefined,
};
