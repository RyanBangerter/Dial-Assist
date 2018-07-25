import React from 'react'
import {Text, View} from 'react-native'
import API from '../utils/API';
import { ProgressCircle } from 'react-native-svg-charts'

class DailyFluid extends React.PureComponent {
    state = {
        fluid: 0.7
    }

    // componentDidMount() {
    //     this.loadJournal()
    // }

    // loadJournal = () => {
    //     API.getJournal(1).then(response => console.log(response))
    // }

    render() {

        return (
            <ProgressCircle
                style={ { height: 200, marginTop: 10 } }
                progress={ this.state.fluid }
                progressColor={'rgb(43, 79, 155)'}
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
        )
    }

}

export default DailyFluid