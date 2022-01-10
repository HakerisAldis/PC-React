import PropTypes from 'prop-types';

const TrackCard = (props) => {
  const { isOpened, level, name } = props;

  return (
    <div>
      {`${isOpened}`} {level} {name}
    </div>
  );
};

TrackCard.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
};

export default TrackCard;
