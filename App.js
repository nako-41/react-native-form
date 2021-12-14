import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Inputs from './Inputs';


const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };

  return(
<View>
      <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
      <Text>This is HOME!</Text>
      
      </TouchableOpacity>
      <Inputs/>
      </View>
  );
};

const About = () => {
  const goToHome = () => {
    Actions.home();
  };

  return(
    <View>
          <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
      <Text>This is ABOUT!</Text>
    </TouchableOpacity>
    <Image
    source={require("../zed/img/Yin.png")}
    />
    </View>

  );
};

const App = () => {
  return(
  <Router>
    <Scene>
      <Scene key="home" component={Home} title="Home" initial={true}></Scene>
      <Scene key="about" component={About} title="About"></Scene>
    </Scene>
  </Router>
  )
};

export default App;