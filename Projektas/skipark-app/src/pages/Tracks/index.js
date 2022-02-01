import TrackCard from '../../components/dataDisplay/TrackCard';
import { IMAGE } from '../../constants/images';
import useGetData from '../../hooks/useGetData';
import { imageService } from '../../services/image';
import { trackService } from '../../services/track';

const Tracks = () => {
  const [tracks, isLoading] = useGetData(trackService.getAll);

  if (isLoading) {
    return <div className="flex items-center justify-center space-x-2 animate-pulse my-4">
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
    </div>;
  }

  return (
    <div className='grid grid-cols-2 divide-x'>
      <div>
        <div className='grid grid-cols-2'>
          {tracks.map(track => <div key={track.id}>
            <TrackCard {...track} />
          </div>)}
        </div>
      </div>
      <div>
        <img className="w-1/2 m-auto" src={imageService.getUrl(IMAGE.TRACKS_SCHEME)} alt="Trasų schema" />
      </div>
    </div>
  );
};

export default Tracks;
