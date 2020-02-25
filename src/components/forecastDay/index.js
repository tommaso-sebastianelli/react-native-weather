import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { List, Text, withTheme } from 'react-native-paper';
import { iconMap } from '../../utils';

function ForecastDay(props) {
    const { data, theme } = props

    return (
        <View>
            <List.Subheader>Today</List.Subheader>
            <View style={style.timeFrameBox}>
                {data.reverse().map((tf, index) => <View
                key={index}
                style={style.timeFrame}
                >
                    <List.Icon icon={iconMap(tf.weather_state_abbr)} />
                    <Text>{Math.floor(tf.the_temp)}°</Text>
                    <Text style={{ color: theme.colors.placeholder }}>{new Date(tf.created).getHours()}&nbsp;</Text>
                </View>)}
            </View>
        </View >
    )
}

const style = StyleSheet.create({
    timeFrameBox: { flexDirection: 'row' },
    timeFrame: { alignItems: 'center' }
});

export default withTheme(memo(ForecastDay))
