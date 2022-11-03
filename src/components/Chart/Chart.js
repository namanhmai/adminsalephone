import {PureComponent} from "react";
import Paper from '@mui/material/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';
import "./Chart.css"


const data = [
    { month: 'Tháng 1', profit: 1400000 },
    { month: 'Tháng 2', profit: 1300000 },
    { month: 'Tháng 3', profit: 1200000 },
    { month: 'Tháng 4', profit: 1500000 },
    { month: 'Tháng 5', profit: 1600000 },
    { month: 'Tháng 6', profit: 1100000 },
    { month: 'Tháng 7', profit: 1400000 },
    { month: 'Tháng 8', profit: 3000000 },
    { month: 'Tháng 9', profit: 1400000 },
    { month: 'Tháng 10', profit: 2000000 },
    { month: 'Tháng 11', profit: 3400000},
    { month: 'Tháng 12', profit: 12100000 },
];
class Charts extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {
            data,
            targetItem: undefined,
        };

        this.changeTargetItem = targetItem => this.setState({ targetItem });
    }

    render() {
        const { data: chartData,targetItem } = this.state;
        return (
            <Paper>
                <Chart
                    data={chartData}
                    height = {400}
                >
                    <ArgumentAxis />
                    <ValueAxis max={100000000} />

                    <BarSeries
                        valueField="profit"
                        argumentField="month"
                    />
                    <Title text="Thống kê thu nhập" />
                    <Animation />
                    <EventTracker />
                    <Tooltip targetItem={targetItem}  />
                </Chart>
            </Paper>
        );
    }

}
export default Charts;