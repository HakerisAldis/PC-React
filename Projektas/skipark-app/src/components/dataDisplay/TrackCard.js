import PropTypes from 'prop-types';

const TrackCard = (props) => {
  const { isOpened, level, name } = props;

  return (
    <div className="max-w-xs rounded overflow-hidden border border-slate-50 shadow-lg my-4 items-center hover:shadow-xl mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex flex-row">
          <div>
            {name}
          </div>
          <div className={`ml-2 mt-1 w-4 h-4 ${isOpened ? 'bg-green-600' : 'bg-red-600'} rounded-full`}></div>
        </div>
        <div className="text-gray-700 text-base">
          <div>
            <b>Atidaryta:</b> {`${isOpened}`}<br />
          </div>
          <div>
            <b>Sudėtingumas:</b> {level}<br />
          </div>
        </div>
      </div>
    </div>
  );
};

TrackCard.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
};

export default TrackCard;
