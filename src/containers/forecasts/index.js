import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import ForecastDay from '../../components/forecastDay';
import ForecastHeader from '../../components/forecastHeader';
import ForecastWeek from '../../components/forecastWeek';

class Forecasts extends PureComponent {
    static propTypes = {

    }

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View style={style.mainView}>
                <ForecastHeader></ForecastHeader>
                <ForecastDay></ForecastDay>
                <ForecastWeek></ForecastWeek>
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainView: {
        padding: 32
    }
});

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Forecasts)
