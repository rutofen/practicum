
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Status from '../src/pages/status';
import Pump from "../src/pages/pump";

import User from '../src/pages/user'
import { Tab } from "../src/components/tab";
import MyTableComponent from '../src/components/MyTableComponent';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Tab color="red" />
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Status />
        <User />
        <MyTableComponent />

        <Pump />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
