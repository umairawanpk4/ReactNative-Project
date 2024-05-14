import {View, Text, StyleSheet, Platform} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Input} from 'native-base';
import {colors} from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const InputBox = (props: any) => {
  const inputRef: any = useRef();
  useEffect(() => {
    if (props.clear) {
      inputRef.current.clear();
    }
  }, [props.clear]);
  return (
    <View style={style.mainContainer}>
      <Text style={style.containerTitleText}>
        {props.title}
        {props.madatoryField ? (
          <Text style={style.madatoryFieldTextStyle}>*</Text>
        ) : null}
      </Text>
      <Input
        ref={inputRef}
        rightElement={props.rightElement}
        value={props.value}
        bgColor={'#FFFFFF'}
        borderColor={'#ffffff'}
        borderWidth={1}
        alignSelf={'center'}
        width={wp(90)}
        height={hp(5)}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={'#19191966'}
        onChangeText={props.onChangeText}
        keyboardType={
          props.keyboardType
            ? props.keyboardType
            : Platform.OS === 'ios'
            ? 'ascii-capable'
            : props.secureTextEntry
            ? 'email-address'
            : 'visible-password'
        }
        isDisabled={props.isDisabled}
        p={2}
        _focus={{borderColor: '#379649'}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    width: wp(90),
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  containerTitleText: {
    color: colors.black,
    fontWeight: '600',
    marginBottom: hp(1),
  },
  madatoryFieldTextStyle: {
    color: '#F00000',
    fontSize: wp(3.5),
  },
});
