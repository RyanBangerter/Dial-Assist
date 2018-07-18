import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class MonthlyFluid extends React.PureComponent {

    render() {

        const data = [ 2, 3, 2, 8, 3, 2, 3 ]
        

        const CUT_OFF = 3
        
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={ index }
                    x={ x(index) + (bandwidth / 2) }
                    y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                    fontSize={ 14 }
                    fill={ value >= CUT_OFF ? 'rgb(244, 66, 66)' : 'rgb(27, 51, 145)' }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )

        return (
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 0 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    svg={ { fill: 'rgb(209, 209, 209)' }}
                    contentInset={{ top: 40, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.HORIZONTAL}/>
                    <Labels/>
                </BarChart>
            </View>
        )
    }

}

export default MonthlyFluid