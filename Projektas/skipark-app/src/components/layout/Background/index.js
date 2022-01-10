import background from './bg.jpg';
import PropTypes from 'prop-types';

const Background = (props) => {
  console.log(props);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover opacity-50 absolute left-0 bottom-0 -z-50"
      style={{ backgroundImage: `url(${background})` }}>
      {props.children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.element.isRequired
};

export default Background;
