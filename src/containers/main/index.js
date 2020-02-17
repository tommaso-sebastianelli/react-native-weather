import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native';

function Main(props) {
    const { } = props

    return (
        <Text>Main Works!</Text>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
