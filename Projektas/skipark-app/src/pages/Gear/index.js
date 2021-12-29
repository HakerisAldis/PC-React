import React from 'react';
import Card from '../../components/Card';
import Snowboard from './snowboard.png';
import Skis from './skis.png';
import Helmet from './helmet.png';
import SnowboardBoots from './snowboardBoots.png';
import SkiBoots from './skiBoots.png';

const Gear = () => {
    return (
        <div className='grid grid-cols-4'>
            <div>
                <Card src={Snowboard} text="Snieglentės" />
            </div>
            <div>
                <Card src={Skis} text="Slidės" />
            </div>
            <div>
                <Card src={Helmet} text="Šalmai" />
            </div>
            <div>
                <Card src={SnowboardBoots} text="Snieglentės batai" />
            </div>
            <div>
                <Card src={SkiBoots} text="Slidžių batai" />
            </div>
        </div> 
    );
}

export default Gear
