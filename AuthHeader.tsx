import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen"
import AntDesign from "react-native-vector-icons/AntDesign"


export const AuthHeader = (props: any) => {
    return (//@ts-ignore
        <View style={[style.headerMainContainer, { justifyContent: props.ShowBackButton ? null : "center", alignItems: props.ShowBackButton ? null : 'center', }]}>
            {props.ShowBackButton ?
                <TouchableOpacity style={style.backButtonContainer}
                    onPress={() => {
                        props.goBackChange ?
                            props.navigation.navigate("Home")
                            :
                            props.navigation.goBack()
                    }
                    }>
                    <AntDesign color={'white'} name='arrowleft' size={25} />
                </TouchableOpacity> : null
            }{/* @ts-ignore */}
            <View style={[style.titleContainer, { width: props.ShowBackButton ? widthPercentageToDP(72) : null }]}>
                <Text style={style.titleText}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    headerMainContainer: {
        flexDirection: 'row',
        padding: widthPercentageToDP(4),
        width: widthPercentageToDP(100),
    },
    backButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP(10),
        marginTop: heightPercentageToDP(0.2)
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: "rgba(55, 150, 73, 1)",
        fontSize: widthPercentageToDP(5),
        fontWeight: '700',
        textAlign: 'center'
    }
})