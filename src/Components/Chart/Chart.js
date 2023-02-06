import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props =>{

    const datapointvalue = props.datapoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...datapointvalue);

    return(
        <div className='chart'>
            {props.datapoints.map(datapoint => 
              <ChartBar
              key = {datapoint.id} 
              value={datapoint.value}
              maxvalue ={totalMaximum}
              label = {datapoint.label}></ChartBar>)}
        </div>
    )
}

export default Chart;