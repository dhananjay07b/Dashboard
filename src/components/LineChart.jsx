import React from 'react'
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { mockLineData as data} from '../data/mockdata';


const LineChart = ({isDashboard = false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
    <ResponsiveLine
    data={data}
    theme={{
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
          },
        },
      },
      legends: {
        text: {
          fill: colors.grey[100],
        },
      },
      tooltip: {
        container: {
          color: colors.primary[500],
        },
      },
    }}
    colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 3,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: "left",
            tickValues:5,
            tickSize: 3,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Revenue in USD',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        lineWidth={3}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.15}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default LineChart