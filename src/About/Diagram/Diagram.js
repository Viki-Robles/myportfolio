import React from 'react';
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import './Diagram.css'

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                xaxis: {
                    categories: ['January', 'February', 'March', 'April', 'May', 'June']
                }
            },


        };
    }
    render() {
        return (

            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="radar" height={400} />
            </div>
        );
    }
}