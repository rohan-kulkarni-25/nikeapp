import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProductsScreen from "./screens/ProductsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable } from "react-native";
import { Text } from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "" } }}
      >
        <Stack.Screen
          name='Products'
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Shopping Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name='shopping-cart' size={18} color='gray' />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name='Product Details'
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name='Shopping Cart' component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
