import React from 'react'
import TrackCard from '../../components/dataDisplay/TrackCard';
import useGetData from '../../hooks/useGetData';
import { trackService } from '../../services/track';

const Tracks = () => {

    const [tracks, isLoading] = useGetData(trackService.getAll);

    if (isLoading) {
        return <div class="flex items-center justify-center space-x-2 animate-pulse my-4">
                <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
                <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
                <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>;
    }

    return (
        <div>
            Trasos
            {tracks.map(track => <li key={track.id}>
                <TrackCard {...track} />
            </li>)}
        </div>
    )
}

export default Tracks;
