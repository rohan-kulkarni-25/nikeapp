import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
// import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
const ProductDetailsScreen = () => {
  const { width } = useWindowDimensions();

  const product = useSelector((state) => state.products.selectedProduct);
  const addToCart = () => {
    console.warn("ADDED TO CART");
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Corousel */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => {
            return (
              <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
            );
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* {Price} */}
          <Text style={styles.price}>${product.price}</Text>
          {/* Descripton */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* ADD TO CART */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation */}
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    padding: 20,
  },
});
