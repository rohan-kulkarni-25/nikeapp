import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotals = () => {
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>410,00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10,00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>420,00 US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const addToCart = () => {};

  return (
    <>
      <FlatList
        style={{ width: "100%" }}
        data={cart}
        renderItem={({ item }) => {
          return <CartListItem cartItem={item} />;
        }}
        ListFooterComponent={() => {
          return <ShoppingCartTotals />;
        }}
      />
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    padding: 20,
    margin: 20,
    borderColor: "gainboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
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
