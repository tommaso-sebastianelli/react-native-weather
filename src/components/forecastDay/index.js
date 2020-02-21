import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { List, Text } from 'react-native-paper';

function ForecastDay(props) {
    const { } = props

    return (
        <View>
            <List.Subheader>Today</List.Subheader>
            <View style={style.timeFrameBox}>
                {[1, 2, 3, 4, 5].map(data => <View style={style.timeFrame}>
                    <List.Icon icon="weather-pouring" />
                    <Text>25°</Text>
                    <Text>03&nbsp;</Text>
                </View>)}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    timeFrameBox: { flexDirection: 'row' },
    timeFrame: { alignItems: 'center' }
});

export default memo(ForecastDay)
