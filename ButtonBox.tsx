import React, {useState} from 'react';
import {Button, Heading} from 'native-base';
import {colors} from '../../theme/colors';
import {ActivityIndicator, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const ButtonBox = (props: any) => {
  const [animation, setAnimation] = useState('');
  return (
    <Animatable.View
      animation={animation}
      onAnimationEnd={() => setAnimation('')}>
      <Button
        bgColor={props.bgColor ? props.bgColor : colors.greenBoldTextColor}
        width={props.width}
        height={props.height}
        onPress={() => {
          props.onPress(), setAnimation('bounceIn');
        }}
        disabled={props.isLoading}>
        <View style={{flexDirection: 'row'}}>
          {props.children}
          <View style={{justifyContent: 'center'}}>
            {props.isLoading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <Heading
                size={'xs'}
                textAlign={'center'}
                color={props.titleColor ? props.titleColor : '#fff'}
                fontWeight={'800'}>
                {props.title}
              </Heading>
            )}
          </View>
        </View>
      </Button>
    </Animatable.View>
  );
};
