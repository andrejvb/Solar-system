import React from 'react';
import Proptypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ (`Planeta ${planetName}`) } />

      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: Proptypes.string.isRequired,
  planetImage: Proptypes.string.isRequired,
};

export default PlanetCard;
