import React, { useState } from "react"
import { ActivityIndicator, Image as NativeImage, Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from "../../theme"
import Image from 'react-native-image-progress';
export const ImageBox = (props: any) => {
    const [isImageLoaded, setImageLoaded] = useState<boolean>(false)
    return (
        <TouchableOpacity onPress={props.onPress} disabled={Platform.OS === 'android' ? !isImageLoaded : false}>
            {Platform.OS === "android" ?
                <View>
                    <NativeImage source={{ uri: props.url }}
                        onLoad={() => setImageLoaded(true)}
                        style={[style.remainingSingleImageStyle, { display: (isImageLoaded ? 'flex' : 'none') }]} />
                    <ActivityIndicator
                        color={colors.greenBoldTextColor}
                        style={[style.remainingSingleImageStyle, { display: (isImageLoaded ? 'none' : 'flex'), justifyContent: 'center', alignItems: 'center' }]}
                    />
                </View> :
                <Image
                    source={{ uri: props.url }}
                    indicator={() => <ActivityIndicator
                        color={colors.greenBoldTextColor}
                        style={[style.remainingSingleImageStyle, { justifyContent: 'center', alignItems: 'center' }]}
                    />}
                    imageStyle={style.remainingSingleImageStyle}
                    style={style.remainingSingleImageStyle}
                    indicatorProps={{
                        size: wp(7),
                        borderWidth: 0,
                        color: colors.greenBoldTextColor,
                        unfilledColor: 'white',
                    }}
                />
            }
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    remainingSingleImageStyle: {
        width: wp(20),
        height: hp(10),
        borderRadius: wp(1)
    },
})