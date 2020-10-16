import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Orphanages from '../pages/Orphanages';
import OrphanageDetails from '../pages/OrphanageDetails';
import SelectMapPosition from '../pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from '../pages/CreateOrphanage/OrphanageData';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#f2f3f5',
      }
    }}>
      <Screen name="Orphanages" component={Orphanages} />
      <Screen name="OrphanageDetails" component={OrphanageDetails} options={{
        headerShown: true,
        header: () => <Header title="Orfanato" showCancel={false} />
      }} />
      <Screen name="SelectMapPosition" component={SelectMapPosition} options={{
        headerShown: true,
        header: () => <Header title="Selecione no mapa" />
      }} />
      <Screen name="OrphanageData" component={OrphanageData} options={{
        headerShown: true,
        header: () => <Header title="Informe os dados" />
      }} />
    </Navigator>
  );
};

export default Routes;
