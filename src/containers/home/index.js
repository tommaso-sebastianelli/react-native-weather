import React, { Component, memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, List, TextInput, Title, withTheme, Snackbar } from 'react-native-paper';
import Pulse from 'react-native-pulse';
import { connect } from 'react-redux';
import { dataSelector, loadingSelector } from '../../redux/home/selectors';
import { errorSelector } from '../../redux/forecasts/selectors';
import { actions } from '../../redux/home/slice';

class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props);

        this.state = {
            searchValue: '',
            hasError: false
        }
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if(oldProps.error !== newProps.error) {
          this.setState({hasError: !!newProps.error})
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

    setLocation = location => {
        this.props.dispatchSetLocation(location);
    }

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
                        : this.props.result && this.props.result.map((location, index) => <List.Item
                            onPress={() => this.setLocation(location)}
                            key={index}
                            title={location.title}
                            description={location.location_type}
                            left={props => <List.Icon icon="map-marker-outline"
                            />
                            }
                        />)
                    }

                </View>
                <View style={style.footer}>
                    <Pulse style={style.pulse} color={this.props.theme.colors.primary} numPulses={4} initialDiameter={500} diameter={800} speed={20} duration={3000} />
                </View>
                <Snackbar
                    visible={this.state.hasError}
                    onDismiss={()=>{
                        this.setState({hasError: false})
                    }}>
                    {this.props.error}
                </Snackbar>
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
    result: dataSelector(state),
    error: errorSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    dispatchSearch: (value) => dispatch(actions.start({ searchValue: value })),
    dispatchClear: () => dispatch(actions.clear()),
    dispatchSetLocation: location => dispatch(actions.setLocation({ location }))
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(withTheme(Home)))
