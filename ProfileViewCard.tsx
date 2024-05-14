import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../theme'
import { Switch } from 'react-native-switch'

export const ProfileViewCard = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={style.mainBox}
      disabled={props.disabled}
    >
      <View style={style.innerContainer}>
        <View style={style.leftSideContainer}>
          <View style={style.svgContainer}>
            <SvgXml xml={props.svg} />
          </View>
          <View style={style.textContainer}>
            <Text style={style.titleTextStyle}>{props.title}</Text>
          </View>
        </View>
        {props.switchShow ?
          <Switch
            value={props.value}
            onValueChange={props.onValueChange}
            disabled={false}
            barHeight={hp(2.8)}
            activeText={'ON'}
            inActiveText={'OFF'}
            circleSize={20}
            backgroundActive={colors.greenBoldTextColor}
            switchWidthMultiplier={3.3}
          /> : null
        }
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  mainBox: {
    flexDirection: "row",
    padding: wp(4),
    borderRadius: wp(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: colors.white,
    marginTop: hp(2),
  },
  svgContainer: {
    justifyContent: "center"
  },
  titleTextStyle: {
    color: colors.black,
    fontWeight: '600',
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: wp(80)
  },
  leftSideContainer: {
    flexDirection: 'row',
    gap: wp(2)
  },
  textContainer: {
    justifyContent: "center"
  }

})