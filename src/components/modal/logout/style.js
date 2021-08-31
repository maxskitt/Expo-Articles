import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    padding: 16,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: "bold"
  },
  titleTextView: {
    marginTop: 16,
    marginBottom: 16
  },
  titleText: {
    color: '#91919F',
  },
  titleButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  titleButtonItemSecondary: {
    padding: 16,
    backgroundColor: "#EEE5FF",
    alignItems: "center",
    borderRadius: 15,
  },
  titleButtonItemPrimary: {
    padding: 16,
    backgroundColor: "#7F3DFF",
    alignItems: "center",
    borderRadius: 15
  },
});

export default styles;
