import React, { memo, useState, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, List, TextInput, Title, withTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { dataSelector, loadingSelector } from '../../redux/search/selectors';
import { actions } from '../../redux/search/slice';

function Main(props) {
    const { dispatchClear, dispatchSearch, loading, result, theme } = props;
    const [searchValue, setSearchValue] = useState('')

    const onSubmit = () => {
        if (searchValue.trim().length >= 3) {
            dispatchSearch(searchValue);
        } else {
            dispatchClear();
        }
    }

    const onChangeText = text => {
        setSearchValue(text);
    };

    return (
        <>
            <View style={style.title}>
                <View style={{ flexDirection: 'row' }}>
                    <Button icon="weather-sunny"></Button>
                    <Button icon="weather-pouring"></Button>
                    <Button icon="weather-windy"></Button>
                    <Button icon="weather-lightning"></Button>
                </View>
                <Title style={{ color: theme.colors.primary }}>
                    react native weather
                </Title>
            </View>
            <View style={style.searchForm}>
                <Title>Location</Title>
                <TextInput
                    style={style.input}
                    label='Type a city here'
                    value={searchValue}
                    onChangeText={text => onChangeText(text)}
                    mode="outlined"
                    onSubmitEditing={onSubmit}
                />
                {(loading) ?
                    <ActivityIndicator animating={true} />
                    : result && result.map(({ title, location_type }) => <List.Item
                        title={title}
                        description={location_type}
                        left={props => <List.Icon icon="map-marker-outline" />}
                    />)
                }

            </View>
            <View style={style.footer}>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 0.3,
    },
    searchForm: {
        padding: 64,
        // justifyContent: 'center',
        flex: 0.5
    },
    input: {
        marginBottom: 16,
    },
    footer:{
        flex: 0.2,
    }
});

const mapStateToProps = (state) => ({
    loading: loadingSelector(state),
    result: dataSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSearch: (value) => dispatch(actions.start({ searchValue: value })),
    dispatchClear: () => dispatch(actions.clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(withTheme(Main)))
