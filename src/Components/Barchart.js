import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Barchart(props) {
    console.log(props)
    const analysis = []
    props.keys.forEach(letter=>analysis.push(props.analysis[letter]))
    const data = {
        labels: props.keys,
        datasets: [
            {
                backgroundColor: 'rgba(41,248,156,0.2)',
                borderColor: 'rgba(41,248,156,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(41,248,156)',
                hoverBorderColor: 'rgba(41,248,156,1)',
                data: analysis
            }
        ]
    };
        return (
            <div>
                {props.keys.length > 0 ?
                    <Bar
                        data={data}
                        width={800}
                        height={400}
                        options={{
                            maintainAspectRatio: true,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            },
                            legend: {
                                display: false
                            }
                        }}
                    /> : null
                }    
            </div>
        );
    }
