import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, List, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { dataSelector, loadingSelector } from '../../redux/search/selectors';
import { actions } from '../../redux/search/slice';

function Main(props) {
    const { dispatchClear, dispatchSearch, loading, result } = props;
    const [searchValue, setSearchValue] = useState('');

    // useEffect(() => {
    //     if (searchValue.trim().length >= 3) {
    //         dispatchSearch(searchValue);
    //     }else{
    //         dispatchClear();
    //     }
    // }, [searchValue]);

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
        <View style={style.view}>
            <TextInput
                style={style.input}
                label='Type a location'
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
    dispatchClear: () => dispatch(actions.clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
