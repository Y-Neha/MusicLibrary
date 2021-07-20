import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, StatusBar, ActivityIndicator, View } from 'react-native'
import SongCell from './SongCell';

export default function Songs(props) {
    const [results, setResults] = useState([]);
    const [indicator, setIndicator] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const { navigation } = props;
    const { container, listStyle } = styles;

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = () => {
        fetch("https://itunes.apple.com/search?term=Michael+jackson")
            .then((response) => response.json())
            .then((json) => {
                setResults(json.results);
                console.log("results", results);
                setIndicator(false);
                setRefreshing(false);
            });
    }
    function navigateToDetails(song) {
        navigation.navigate('Song Details', { song: song })
    }

    const renderItem = ({ item }) => {
        console.log("item", item.artworkUrl100)
        return <SongCell song={item} onCellClicked={navigateToDetails} />
    };

    const renderSeparator = () => {
        return <View style={styles.separator} />;
    }
    const onRefresh = () => {
        setRefreshing(true);
        fetchResults()
    }
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
            <SafeAreaView style={container}>
                <ActivityIndicator color="#6a51ae" size="large" animating={indicator} style={{ alignItems: 'center', flex: 1 }} />
                <FlatList
                    data={results}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.trackId}
                    style={listStyle}
                    ItemSeparatorComponent={renderSeparator}
                    refreshing={refreshing}
                    onRefresh={() => onRefresh()}
                />
            </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listStyle: {
        padding: 10
    },
    separator: {
        backgroundColor: "lightgray",
        height: 1,
    }
}); 