import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigation from './src/router/bottomTabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigation />
    </NavigationContainer>
  );
};

export default App;
