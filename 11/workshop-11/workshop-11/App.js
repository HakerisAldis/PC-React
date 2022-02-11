import { NavigationContainer } from '@react-navigation/native';
import Academy from './pages/Academy';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Academy" component={Academy} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
