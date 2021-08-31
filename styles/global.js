import {StyleSheet} from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FBFBFB",
  },
  containerGrabber: {
    justifyContent:'center',
    alignItems: "center",
    marginBottom: 16
  },
  grabber: {
    width: 30,
    borderTopWidth: 3,
    borderRadius: 5,
    borderTopColor: "#aaa",
  },
});

export default globalStyles;
