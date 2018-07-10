import React from 'react'
import { View } from 'react-native'
import { BarChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import { Text } from 'react-native-svg'

class WeeklyLabs extends React.PureComponent {

    render() {

        const data = [
            {
                value: 6,
                label: 'Potassium',
            },
            {
                value: 5,
                label: 'Phosporus',
            },
            {
                value: 7,
                label: 'Albumen',
            },
        ]
       


        return (
            <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16, paddingHorizontal: 10 }}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 4 }}
                    data={data}
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>

            </View>
        )
    }

}

export default WeeklyLabs