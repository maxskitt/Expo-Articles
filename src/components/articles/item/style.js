import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    paddingVertical: 8,
    borderColor: "#C4C4C4",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  containerArticles: {
    flex: 1,
    flexDirection: "row",
  },
  titleAvatar: {
    marginTop: 3,
    marginRight: 10,
    marginLeft: 10,
  },
  containerTitleText: {
    flex: 1,
  },
  containerText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 5
  }

});

export default styles;
