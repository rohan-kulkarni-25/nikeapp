import { useNavigation } from "@react-navigation/native";
import { FlatList, View, StyleSheet, Image, Pressable } from "react-native";
// import products from "../data/products";

import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";

const ProductsScreen = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        console.log(item);
        return (
          <Pressable
            onPress={() => {
              // Update selected product

              dispatch(productSlice.actions.setSelectedProduct(item.id));

              navigation.navigate("Product Details");
            }}
            style={styles.itemContainer}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </Pressable>
        );
      }}
      numColumns={2}
    />
  );
};
export default ProductsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
