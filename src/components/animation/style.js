import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "flex-start",
    alignContent: "flex-start",
    padding: 16
  },
  box: {
    height: 50,
    width: 50,
    marginBottom: 16,
    backgroundColor: 'red',
  },
  ball: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  balls: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: 'red'
  }
});

export default styles


// containerPodcast: {
//   flexDirection: "row",
//     backgroundColor: 'blue',
//     justifyContent: "center",
//     height: 100,
//     zIndex: 3,
// },
// podcastBlock: {
//   height: 120,
//     width: 150,
//     backgroundColor: "red",
// },
// containerList: {
//   padding: 16,
//     backgroundColor: 'white',
//     alignItems: "center"
// },
// containerFlatList: {
//   backgroundColor: 'white',
// },
// box: {
//   backgroundColor: "#61dafb",
//     width: 80,
//     height: 80,
//     borderRadius: 4,
// },
