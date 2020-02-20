import React, { Component, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, List, TextInput, Title, withTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { dataSelector, loadingSelector } from '../../redux/search/selectors';
import { actions } from '../../redux/search/slice';
import Pulse from 'react-native-pulse';

class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props);

        this.state = {
            searchValue: ''
        }

    }

    onSubmit = () => {
        if (this.state.searchValue.trim().length >= 3) {
            this.props.dispatchSearch(this.state.searchValue);
        }
    }

    onChangeText = text => {
        this.setState({
            searchValue: text
        });
        if (this.state.searchValue.length < 3) {
            this.props.dispatchClear();
        }
    };

    render() {
        return (
            <>
                <View style={style.title}>
                    <View style={{ flexDirection: 'row' }}>
                        <Button icon="weather-sunny"></Button>
                        <Button icon="weather-pouring"></Button>
                        <Button icon="weather-windy"></Button>
                        <Button icon="weather-lightning"></Button>
                    </View>
                    <Title style={{ color: this.props.theme.colors.primary }}>
                        react native weather
                    </Title>
                </View>
                <View style={style.searchForm}>
                    <Title>Location</Title>
                    <TextInput
                        style={style.input}
                        label='Type a city here'
                        value={this.state.searchValue}
                        onChangeText={text => this.onChangeText(text)}
                        mode="outlined"
                        onSubmitEditing={this.onSubmit}
                    />
                    {(this.props.loading) ?
                        <ActivityIndicator animating={true} />
                        : this.props.result && this.props.result.map(({ title, location_type }) => <List.Item
                            title={title}
                            description={location_type}
                            left={props => <List.Icon icon="map-marker-outline" />}
                        />)
                    }

                </View>
                <View style={style.footer}>
                    <Pulse style={style.pulse} color={this.props.theme.colors.primary} numPulses={4} initialDiameter={500} diameter={800} speed={20} duration={3000} />
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 0.3,
    },
    searchForm: {
        padding: 64,
        flex: 0.3
    },
    input: {
        marginBottom: 16,
    },
    pulse: {
        position: 'absolute'
    },
    footer: {
        opacity: 0.4,
        flex: 0.4,
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(withTheme(Home)))
