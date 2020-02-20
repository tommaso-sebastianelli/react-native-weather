import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native';
import { Headline, Text, withTheme, Title, List } from 'react-native-paper';
import { connect } from 'react-redux'

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
            <>
                <View style={style.section}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Headline style={{ color: this.props.theme.colors.primary }}>London</Headline>
                        <List.Icon color={this.props.theme.colors.primary} style={
                            { transform: [{ scale: 1.3 }] }
                        } icon="weather-pouring" />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Title style={{ color: this.props.theme.colors.primary }}>26°</Title>
                        <Text style={{ color: this.props.theme.colors.primary }}>max 28°</Text>
                        <Text style={{ color: this.props.theme.colors.primary }}>min 19°</Text>
                        <List.Icon color={this.props.theme.colors.primary} icon="water-outline" />
                        <Text style={{ color: this.props.theme.colors.primary }}>85%</Text>
                    </View>
                </View>
                <View style={style.section}>
                    <Text></Text>
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    section: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 32
    }
});

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Forecasts))
