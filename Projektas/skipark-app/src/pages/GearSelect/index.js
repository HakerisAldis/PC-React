import GearCard from '../../components/dataDisplay/GearCard';
import { imageService } from '../../services/image';
import { IMAGE } from '../../constants/images';
import { ROUTES } from '../../routes';

const GearSelect = () => {
  return (
    <div className='grid grid-cols-4'>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SNOWBOARD)} text="Snieglentės" to={`${ROUTES.GEARSELECT}/Snowboards`} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SKIS)} text="Slidės" to={`${ROUTES.GEARSELECT}/Skis`} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.HELMET)} text="Šalmai" to={`${ROUTES.GEARSELECT}/Helmets`} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SNOWBOARD_BOOTS)} text="Snieglentės batai" to={`${ROUTES.GEARSELECT}/SnowboardBoots`} />
      </div>
      <div>
        <GearCard src={imageService.getUrl(IMAGE.SKI_BOOTS)} text="Slidžių batai" to={`${ROUTES.GEARSELECT}/SkiBoots`} />
      </div>
    </div>
  );
};

export default GearSelect;
