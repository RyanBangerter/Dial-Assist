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
                label: 'Potassium' ,
                svg: { fill: 'rgb(244, 160, 65)'},
                
            },
            {
                value: 5,
                label: 'Phosporus',
                svg: { fill: 'rgb(244, 223, 65)'},
                
            },
            {
                value: 7,
                label: 'Albumen',
                svg: { fill: 'rgb(244, 66, 66)'},
                
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
                    formatLabel={(_, index) => data[ index ].label + '\xa0' + '=' + '\xa0' + data[ index ].value} 
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 10}}
                    data={data}
                    horizontal={true}
                    yAccessor={({ item }) => item.value}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={1}
                    gridMin={0}
                    
                    
                >
                   
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>

            </View>
        )
    }

}

export default WeeklyLabs