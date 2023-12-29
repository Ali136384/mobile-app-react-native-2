import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import SingleBlog from "./src/screens/SingleBlog";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={IndexScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={{ title: "Create" }}
          />
          <Stack.Screen
            name="single/:id"
            component={SingleBlog}
            options={{ title: "Create" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
