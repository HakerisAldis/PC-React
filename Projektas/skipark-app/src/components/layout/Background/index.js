import PropTypes from 'prop-types';
import { imageService } from '../../../services/image';
import { IMAGE } from '../../../constants/images';

const Background = (props) => {
  console.log(props);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-no-repeat bg-cover opacity-50 absolute left-0 bottom-0 -z-50"
      style={{ backgroundImage: `url(${imageService.getUrl(IMAGE.BACKGROUND)})` }}>
      {props.children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.element.isRequired
};

export default Background;
