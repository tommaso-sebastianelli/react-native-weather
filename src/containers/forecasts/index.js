import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from 'react-native-paper'
import { connect } from 'react-redux';
import ForecastDay from '../../components/forecastDay';
import ForecastHeader from '../../components/forecastHeader';
import ForecastWeek from '../../components/forecastWeek';
import Pulse from 'react-native-pulse';

class Forecasts extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <View style={style.mainView}>
                <ForecastHeader></ForecastHeader>
                <ForecastDay></ForecastDay>
                <ForecastWeek></ForecastWeek>
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
        position:'absolute',
        bottom: 0,
        opacity: 0.4
    }
});

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Forecasts))
