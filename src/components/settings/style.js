import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FBFBFB",
    padding: 26,
  },
  title: {
    fontSize: 16,
    color: '#636363',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'SFProDisplayBold'
  },
  containerIndustry: {
    flex: 1,
  },
  containerIndustryTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  containerIndustryTitleText: {
    fontFamily: 'SFProDisplayBold',
    textTransform: 'uppercase',
    color: '#636363',
    fontSize: 12,
  },
  containerIndustryTitleClear: {
    fontFamily: 'SFProDisplayRegular',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#BABABA',
    fontSize: 12,
  },
  containerIndustryTitleButton: {
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'flex-start',
  },
  defaultButton: {
    backgroundColor: '#F3F3F3',
    marginLeft: 5,
    marginTop: 10,
    padding: 5,
    borderRadius: 25
  },
  button: {
    backgroundColor: '#FFC803',
    marginLeft: 5,
    marginTop: 10,
    padding: 5,
    borderRadius: 15
  },
  checkbox: {
    alignSelf: "center",
  },
  containerIndustryTitleLocation: {
    marginTop: 15,
  },
  location: {
    backgroundColor: '#636363',
  }
});

export default styles;
