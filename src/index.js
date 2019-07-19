import splashScreen from './pages/splashScreen'
import mainView from './pages/mainView'
import game1 from './pages/Game1'
import game2 from './pages/Game2'
import game3 from './pages/Game3'
import game4 from './pages/Game4'
import drinks from './pages/Game3/Drinks'
import receitas from './pages/Game3/Receitas'


import { createStackNavigator } from 'react-navigation'


const StackNavigator = createStackNavigator({
    splashScreen: splashScreen,
    mainView: mainView,
    game1: game1,
    game2: game2,
    game3: game3,
    game4: game4,
    drinks: drinks,
    receitas: receitas

});

export default { StackNavigator };