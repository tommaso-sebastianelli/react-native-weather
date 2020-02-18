import React, { memo, useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { actions } from '../../redux/search/slice';
import { dataSelector, loadingSelector } from '../../redux/search/selectors';
import { TextInput, List, ActivityIndicator, Colors } from 'react-native-paper';


function Main(props) {
    const { dispatchClear, dispatchSearch, loading, result } = props;
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue.length >= 3) {
            dispatchSearch(searchValue);
        }else{
            dispatchClear();
        }
    }, [searchValue]);

    const onChangeText = text => {
        setSearchValue(text);
    };

    return (
        <View style={style.view}>
            <TextInput
                style={style.input}
                label='Type a location'
                value={searchValue}
                onChangeText={text => onChangeText(text)}
                mode="outlined" />
            {(loading) ?
                <ActivityIndicator animating={true} />
                : result && result.map(({title, location_type}) => <List.Item
                    title={title}
                    description={location_type}
                    left={props => <List.Icon icon="map-marker-outline" />}
                />)
            }

        </View>
    )
}

const style = StyleSheet.create({
    view: {
        padding: 32,
        justifyContent: 'center',
        flex: 1
    },
    input: {
        marginBottom: 16,
    }
});

const mapStateToProps = (state) => ({
    loading: loadingSelector(state),
    result: dataSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSearch: (value) => dispatch(actions.start({ searchValue: value })),
    dispatchClear: ()=> dispatch(actions.clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
