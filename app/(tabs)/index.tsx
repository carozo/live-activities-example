import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
const { ScoreWidgetModule } = NativeModules;

import React from "react";
import { Button, NativeModules, View } from "react-native";

export default function HomeScreen() {
  type LiveActivityParams = {
    status: string;
    driverName: string;
    expectedDeliveryTime: string;
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 48,
        }}
      >
        <Button
          title="Start"
          onPress={() => {
            ScoreWidgetModule.startLiveActivity();
          }}
        />
        <Button
          title="Stop"
          onPress={() => {
            ScoreWidgetModule.stopLiveActivity();
          }}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
