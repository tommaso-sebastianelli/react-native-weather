import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, List, Text, Title, withTheme } from 'react-native-paper';
import { iconMap } from '../../utils';

function ForecastHeader(props) {
    const { theme, data } = props;

    return (
        <View>
            <View style={style.mainData}>
                <Headline style={[style.name, { color: theme.colors.primary }]}>{data.title}</Headline>
                <List.Icon style={style.weatherIcon} color={theme.colors.primary} icon={iconMap(data.consolidated_weather[0].weather_state_abbr)} />
            </View>
            <View style={style.secondaryData}>
                <List.Icon style={style.temperatureIcon} color={theme.colors.primary} icon="thermometer" />
                <Title style={{ color: theme.colors.primary }}>{Math.floor(data.consolidated_weather[0].the_temp)}°</Title>
                <View style={style.temperatureRange}>
                    <Text style={{ color: theme.colors.primary }}>max {Math.floor(data.consolidated_weather[0].max_temp)}°</Text>
                    <Text style={{ color: theme.colors.primary }}>min {Math.floor(data.consolidated_weather[0].min_temp)}°</Text>
                </View>
                <View style={style.humidity}>
                    <List.Icon style={style.humidityIcon} color={theme.colors.primary} icon="water-outline" />
                    <Text style={{ color: theme.colors.primary }}>{data.consolidated_weather[0].humidity}%</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    name: { marginLeft: 14 },
    mainData: { flexDirection: 'row', alignItems: 'center' },
    secondaryData: { flexDirection: 'row', alignItems: 'center' },
    weatherIcon: { transform: [{ scale: 1.3 }] },
    temperatureIcon: { width: 25 },
    temperatureRange: { marginLeft: 8 },
    humidity: { flexDirection: 'row', alignItems: 'center', marginLeft: 16 },
    humidityIcon: { width: 25 },
});

export default memo(withTheme(ForecastHeader))
