import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  containerButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  jobSearch: {
    fontFamily: 'SFProDisplayBold',
    color: '#636363',
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: 10
  },
  searchInput: {
    fontFamily: 'SFProDisplayRegular',
    color: '#636363',
    fontSize: 14,
  },
  searchInputContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 8,
  },
  containerSearch: {
    flexDirection: "row",
    marginBottom: 16,
    height: 50,
  },
  containerSearchBar: {
    flex: 0.88,
  },
  containerSearchBarButton: {
    flex: 0.12,
    backgroundColor: "#FFC803",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  containerSort: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  sortText: {
    fontFamily: 'SFProDisplayBold',
    color: '#636363',
    fontSize: 14,
  },
  sortPosted: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortPostedText: {
    fontFamily: 'SFProDisplayRegular',
    color: '#636363',
    fontSize: 14,
  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});

export default styles;


// title: {
//   marginTop: 16,
//     paddingVertical: 8,
//     borderColor: "#C4C4C4",
//     borderRadius: 6,
//     backgroundColor: "#FFFFFF",
//     shadowColor: "#000",
//     shadowOffset: {
//     width: 0,
//       height: 1,
//   },
//   shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//
//     elevation: 3,
// },
// containerTitleText: {
//   flex: 1,
// },
// titleAvatar: {
//   marginTop: 3,
//     marginRight: 10,
//     marginLeft: 10,
// },
// containerText: {

//
// },
// titleText: {
//   fontFamily: 'Montserrat',
//     fontSize: 12,
// },
// containerButton: {
//   flex: 1,
//     flexDirection: "row",
//   // marginTop: 16,
//   // alignItems: 'center',
//   // justifyContent: "flex-end",
// },
// tinyLogo: {
//   width: 30,
//     height: 30,
// },
