import React, { PureComponent } from 'react'
import { Text } from 'react-native';
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
                <Text>Forecasts container works!</Text>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Forecasts)
