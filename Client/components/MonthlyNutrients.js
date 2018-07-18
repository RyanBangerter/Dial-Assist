import React from 'react'
import {Text, View} from 'react-native'
import { LineChart } from 'react-native-svg-charts'

class MonthlyNutrients extends React.PureComponent {
    state = {
        albumen: [],
        phosphorous: [],
        potassium: []
    }

    render() {

        return (
            <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            <YAxis
                data={data}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                >
                    <Grid/>
                </LineChart>
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={axesSvg}
                />
            </View>
        </View>
        )
    }

}

export default MonthlyNutrients;