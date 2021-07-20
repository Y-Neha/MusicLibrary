import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SongCell(props) {
    const {collectionName, trackName } = props.song;
    const {onCellClicked} = props;
    const {container, headerText, subHeaderText, textContainer} = styles;
    const myIcon = <Icon name="library-music" size={40} color="#6a51ae" />;

    return (
        <TouchableOpacity style={container} onPress={() => onCellClicked(props.song)}>
            {/* <Image
                style={imageContainer}
                source={{ uri: `${artworkUrl100}` }}
            /> */}
            {myIcon}
            <View style={textContainer}>
                <Text style={headerText}>{trackName}</Text>
                <Text style={subHeaderText}>{collectionName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
    },
    imageContainer: {
        width: 50,
        height: 50,
        resizeMode: 'stretch',
        margin: 5,
        alignItems: 'center',
    },
    textContainer: {
        padding: 5,
        marginHorizontal: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3e3e40',
        marginVertical: 2,
    },
    subHeaderText: {
        fontSize: 14,
        color: '#4e4e52',
    }
})
