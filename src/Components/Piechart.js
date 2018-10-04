import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function PieChart(props) {
    console.log(props)
    const analysis = []
    props.keys.forEach(letter => analysis.push(props.analysis[letter]))
    const data = {
        labels: props.keys,
        datasets: [{
            data: analysis,
            backgroundColor: [
                'rgb(106, 114, 251, 0.5)',
                'rgb(101, 203, 230, 0.5)',
                'rgb(39, 232, 146, 0.5)',
                'rgb(167, 230, 104, 0.5)',
                'rgb(254, 231, 111, 0.5)',
                'rgb(106, 114, 251, 0.5)',
                'rgb(101, 203, 230, 0.5)',
                'rgb(39, 232, 146,0.5)',
                'rgb(167, 230, 104, 0.5)',
                'rgb(254, 231, 111, 0.5)',
                'rgb(106, 114, 251, 0.5)',
                'rgb(101, 203, 230, 0.5)',
                'rgb(39, 232, 146, 0.5)',
                'rgb(167, 230, 104, 0.5)',
                'rgb(254, 231, 111, 0.5)',
                'rgb(106, 114, 251, 0.5)',
                'rgb(101, 203, 230, 0.5)',
                'rgb(39, 232, 146, 0.5)',
                'rgb(167, 230, 104, 0.5)',
                'rgb(254, 231, 111, 0.5)',
                'rgb(106, 114, 251, 0.5)',
                'rgb(101, 203, 230, 0.5)',
                'rgb(39, 232, 146, 0.5)',
                'rgb(167, 230, 104, 0.5)',
                'rgb(254, 231, 111, 0.5)',
                'rgb(106, 114, 251, 0.5)'
            ],
            hoverBackgroundColor: [
                'rgb(106, 114, 251)',
                'rgb(101, 203, 230)',
                'rgb(39,232,146)',
                'rgb(167,230,104)',
                'rgb(254,231,111)',
                'rgb(106, 114, 251)',
                'rgb(101, 203, 230)',
                'rgb(39,232,146)',
                'rgb(167,230,104)',
                'rgb(254,231,111)',
                'rgb(106, 114, 251)',
                'rgb(101, 203, 230)',
                'rgb(39,232,146)',
                'rgb(167,230,104)',
                'rgb(254,231,111)',
                'rgb(106, 114, 251)',
                'rgb(101, 203, 230)',
                'rgb(39,232,146)',
                'rgb(167,230,104)',
                'rgb(254,231,111)',
                'rgb(106, 114, 251)',
                'rgb(101, 203, 230)',
                'rgb(39,232,146)',
                'rgb(167,230,104)',
                'rgb(254,231,111)',
                'rgb(106, 114, 251)'
            ],
        }]
    };
    return (
        <div>
            <Doughnut
                data={data}
                height={400}
                width={800}
                options={{
                    legend: {
                        display: false
                    }
                }} />
        </div>
    );
}
