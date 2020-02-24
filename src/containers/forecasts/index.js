import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-paper'
import { connect } from 'react-redux';
import ForecastDay from '../../components/forecastDay';
import ForecastHeader from '../../components/forecastHeader';
import ForecastWeek from '../../components/forecastWeek';
import Pulse from 'react-native-pulse';
import { dataSelector } from '../../redux/forecasts/selectors'

class Forecasts extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const { daily, weekly } = this.props.data;
        console.log('forecast rendered');
        return (
            <View style={style.mainView}>
                <ForecastHeader data={weekly}></ForecastHeader>
                <ForecastDay data={daily}></ForecastDay>
                <ForecastWeek data={weekly.consolidated_weather}></ForecastWeek>
                <View style={style.footer}>
                    <Pulse style={style.pulse} color={this.props.theme.colors.primary} numPulses={3} initialDiameter={300} diameter={500} speed={20} duration={3000} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: 96,
        padding: 32
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        opacity: 0.4
    }
});

const mapStateToProps = (state) => ({
    data: dataSelector(state)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Forecasts))
