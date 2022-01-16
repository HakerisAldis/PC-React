import GearCard from '../../components/dataDisplay/GearCard';
import { imageService } from '../../services/image';
import { IMAGE } from '../../constants/images';

const Gear = () => {
  return (
    <div className='grid grid-cols-4'>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SNOWBOARD)} text="Snieglentės" to="snowboards" />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SKIS)} text="Slidės" />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.HELMET)} text="Šalmai" />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SNOWBOARD_BOOTS)} text="Snieglentės batai" />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SKI_BOOTS)} text="Slidžių batai" />
      </div>
    </div>
  );
};

export default Gear;
