import { Input, Item, View, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function Main(props) {
    const { } = props

    return (
        <View style={style.view}>
            <Item rounded>
                <Input placeholder='Rounded Textbox' />
            </Item>
            <List style={style.list}>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: 'Image URL' }} />
                    </Left>
                    <Body>
                        <Text>Kumar Pratik</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
            </List>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        padding: 32,
        justifyContent: 'center',
        flex: 1
    },
    list: {
        marginTop: 16,
        left: 0
    }
});

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
