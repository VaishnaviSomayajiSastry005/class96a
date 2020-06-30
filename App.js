import{createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import HomeScreen2 from './screens/HomeScreen2';
import HomeScreen3 from './screens/HomeScreen3';
export default class App extends Component{
 render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}
const switchNavigator = createSwitchNavigator({
  HomeScreen:{screen: HomeScreen},
  HomeScreen2:{screen:HomeScreen2},
  HomeScreen3:{screen:HomeScreen3},
})

const AppContainer =  createAppContainer(switchNavigator);
