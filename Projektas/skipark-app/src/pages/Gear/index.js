import GearCard from '../../components/dataDisplay/GearCard';
import { imageService } from '../../services/image';
import { IMAGE } from '../../constants/images';
import { ROUTES } from '../../routes';

const Gear = () => {
  return (
    <div className='grid grid-cols-4'>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SNOWBOARD)} text="Snieglentės" to={ROUTES.SNOWBAORDS} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SKIS)} text="Slidės" to={ROUTES.SKIS} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.HELMET)} text="Šalmai" to={ROUTES.HELMETS} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SNOWBOARD_BOOTS)} text="Snieglentės batai" to={ROUTES.SNOWBOARD_BOOTS} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SKI_BOOTS)} text="Slidžių batai" to={ROUTES.SKI_BOOTS} />
      </div>
    </div>
  );
};

export default Gear;
