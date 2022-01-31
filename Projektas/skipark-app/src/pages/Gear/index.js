import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AddItemCard from '../../components/addItemCard';
import GearList from '../../components/layout/GearList';
import useGetData from '../../hooks/useGetData';
import { gearService } from '../../services/gear';
import { userService } from '../../services/user';
import { UserContext } from '../../constants/contexts';
import withUserIdent from '../../HOC\'s/withUserIdent';

const Gear = () => {
  const { collection } = useParams();
  const allGear = async () => await gearService.getAll(collection);
  const [gearList, isLoading] = useGetData(allGear);

  const user = useContext(UserContext);
  const isUserAdmin = async () => await userService.isAdmin(user);
  const [isAdmin] = useGetData(isUserAdmin);

  function test () {
    console.log('Alio valio');
  }

  return (
    <div>
      <GearList gearList={gearList} isLoading={isLoading} >
        {isAdmin &&
          <AddItemCard onClick={test}/>
        }
      </GearList>
    </div>
  );
};

export default withUserIdent(Gear);
