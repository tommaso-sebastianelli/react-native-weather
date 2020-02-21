import React, { memo } from 'react'
import { List, Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native';


function ForecastWeek(props) {
    return (
        <View>
            <List.Section>
                <List.Subheader>This Week</List.Subheader>
                <List.Item
                    title="First Item"
                    description="Item description"
                    left={props => <List.Icon {...props} icon="weather-sunny" />}
                    right={props => <View style={{justifyContent:'center'}}><Text>21°</Text><Text>21°</Text></View>}
                />
            </List.Section>
        </View>
    )
}

const style = StyleSheet.create({

});

export default memo(ForecastWeek)
