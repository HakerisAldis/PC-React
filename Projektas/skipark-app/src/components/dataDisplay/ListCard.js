import PropTypes from 'prop-types';
import { imageService } from '../../services/image';

const ListCard = (props) => {
  const { image, name, length, flex, profile, size } = props;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 items-center hover:shadow-xl mx-auto">
      <img className="w-1/2 mx-auto" src={imageService.getUrl(image)} alt="Snowboard" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {name}
        </div>
        <p className="text-gray-700 text-base">
          { length &&
            <div>
              <b>Ilgis:</b> {length} cm <br />
            </div>
          }
          { flex &&
            <div>
              <b>Kietumas:</b> {flex}<br />
            </div>
          }
          { profile &&
            <div>
              <b>Išlenkimas:</b> {profile}<br />
            </div>
          }
          { size &&
            <div>
              <b>Dydis:</b> {size}<br />
            </div>
          }
        </p>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  length: PropTypes.number,
  flex: PropTypes.string,
  profile: PropTypes.string,
  size: PropTypes.string || PropTypes.number
};

ListCard.defaultProps = {
  length: '',
  flex: '',
  profile: '',
  size: ''
};

export default ListCard;
