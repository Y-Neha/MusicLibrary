import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SongDetail({ route, navigation }) {
    const { collectionName, trackName, artistName } = route.params.song;
    const { container, textContainer, iconContainer, textStyle, subtextStyle } = styles;
    const myIcon = <Icon name="music-circle-outline" size={300} color="#6a51ae" />;

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button color="white" onPress={() => navigation.pop()} title="Back" />
            ),
        });
    }, [navigation]);

    return (
        <View style={container}>
            <View style={iconContainer}>{myIcon}</View>
            <View style={textContainer}>
                <Text style={textStyle}>{collectionName}</Text>
                <Text style={subtextStyle}>{trackName}</Text>
                <Text style={subtextStyle}>{artistName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 30,
    },
    iconContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        // marginHorizontal: 30,
        backgroundColor: 'white',
        shadowColor: '#aaa',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        borderRadius: 8,
    },
    textContainer: {
        flex: 2,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 5,
       fontStyle: 'italic',
       fontWeight: 'bold'
    },
    subtextStyle: {
        fontSize: 15,
        marginBottom: 5,
    }
})