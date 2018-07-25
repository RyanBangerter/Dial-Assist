import React from 'react'
import {Text, View} from 'react-native'
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'

class MonthlyNutrients extends React.PureComponent {
    state = {
        albumen: [],
        phosphorous: [],
        potassium: []
    };

    
    render() {

        const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
        const data2 = [40, 20, 30, 85, -14, -14, 95, 81, 45, 63, -63, 14, 40, -10, -70 ];
        
        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30;


        return (
            <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
            <YAxis
                data={data1}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data1}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(255, 0, 0)' }}
                >
                    <Grid/>
                </LineChart>
                {/* <LineChart
                    style={{ flex: 1 }}
                    data={data2}
                    contentInset={verticalContentInset}
                    svg={{ stroke: 'rgb(0, 255, 0)' }}
                >
                    <Grid/>
                </LineChart> */}
                <XAxis
                    style={{ marginHorizontal: -10, height: xAxisHeight }}
                    data={data1}
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