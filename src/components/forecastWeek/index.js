import React, { memo } from 'react'
import { List, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native';
import { iconMap, weekDay } from '../../utils';

function ForecastWeek(props) {
    const { data } = props;
    return (
        <View>
            <List.Section>
                <List.Subheader>This Week</List.Subheader>
                {data.map((wd, index) => (index === 0) ? null : <List.Item
                    key={index}
                    title={weekDay(new Date(wd.applicable_date).getDay())}
                    description={wd.weather_state_name}
                    left={props => <List.Icon {...props} icon={iconMap(wd.weather_state_abbr)} />}
                    right={props => <View style={{ justifyContent: 'center' }}><Text>{Math.floor(wd.max_temp)}°</Text><Text>{Math.floor(wd.min_temp)}°</Text></View>}
                />)}

            </List.Section>
        </View>
    )
}

export default memo(ForecastWeek)
