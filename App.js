import React, { useState } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import store from "./store";
import Main from "./components/Main";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontLoad: false };
  }
  componentDidMount() {
    Font.loadAsync({
      "8BIT": require("./assets/fonts/PressStart2P-Regular.ttf")
    })
      .then(() => this.setState({ fontLoad: true }))
      .catch(console.log);
  }
  render() {
    return this.state.fontLoad ? (
      <Provider store={store}>
        <Main />
      </Provider>
    ) : (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

/*  function App() {
            const [fontLoad, setFontLoad] = useState(false);
            (async () => {
              await Font.loadAsync({
                "8BIT": require("./assets/fonts/PressStart2P-Regular.ttf")
              });
              setFontLoad(true);
            })();
            return fontLoad ? (
              <Provider store={store}>
                <Main />
              </Provider>
            ) : (
              <View>
                <Text>Loading...</Text>
              </View>
            );
          } */
