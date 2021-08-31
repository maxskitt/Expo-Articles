import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  containerAvatar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerAvatarImage: {
    borderWidth: 3,
    borderColor: '#7F3DFF',
    padding: 5,
    borderRadius: 50,
  },
  containerAvatarBlock: {
    marginLeft: 16,
  },
  user: {
    fontSize: 14,
    color: '#91919F'
  },
  userName: {
    width: 100,
    fontSize: 24,
    color: '#161719'
  },
  containerMenu: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    borderRadius: 15,
  },
  containerMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomColor: '#C6C6C6',
    borderBottomWidth: 1,
  },
  containerMenuItemEnd: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  containerMenuText: {
    fontSize: 16,
    marginLeft: 6,
  }
});

export default styles;
