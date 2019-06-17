import React from 'react'
import '../../../node_modules/react-vis/dist/style.css'
import { XYPlot,XAxis,YAxis, LineSeries, VerticalBarSeries, Hint} from  'react-vis'

class MyChart extends React.Component{
    constructor( props){
        super( props)
        this.state={
            content:{
                matrix:[
                    {x: 0, y: 8},
                    {x: 1, y: 5},
                    {x: 2, y: 4},
                    {x: 3, y: 9},
                    {x: 4, y: 1},
                    {x: 5, y: 7},
                    {x: 6, y: 6},
                    {x: 7, y: 3},
                    {x: 8, y: 2},
                    {x: 9, y: 0}
                ]
            },
            unidade: ''
        }
    }

    componentWillMount() {
        let self = this;
        const success = (d) => {
            
            if(! d.status){
               alert( d.mesage) 
               window.localStorage.setItem('dashCond', '');
               window.location.reload()
            } 
            else{
                let arrayTemp = d.content.reverse().filter( ( e, i) => i < 12 )
                let matrix = arrayTemp.reverse().map( e => {
                    return {x: e.data, y: e.valor}
                })
                let content = { matrix}
                let unidade = arrayTemp[0].unidade
                self.setState(
                    {
                        content,
                        unidade
                    }
                ) 
            }
        }
        const fail = (e) => { 
            window.localStorage.setItem('dashCond', '');
            window.location.reload()
            console.log(e);
        }

        let config = [
            `http://localhost/dashboard_react_php/backend/chart.php?cond=${this.props.codCond}&tipo=${this.props.tipLeitura}&token=${this.props.token}`,
            {
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                mode: 'cors',
                method: 'GET',
            }
        ];

        fetch(...config).then(resp => resp.json())
            .then(data => success(data))
            .catch(error => fail(error));
    }

    
    render(){
        let matrix = this.state.content.matrix
        let yDomain = matrix.reduce(
            (res, row) => {
              return {
                max: Math.max(res.max, row.y),
                min: Math.min(res.min, row.y)
              };
            },
            {max: -Infinity, min: Infinity}
          );
        return(
            <div className="my-chart">
                <XYPlot
                    height={250} 
                    width={350} 
                    yDomain={[0, yDomain.max]}
                    xType='ordinal'
                    margin={{left: 60, right: 10, top: 50, bottom: 60}}
                 >
                    <VerticalBarSeries data={matrix} />
                    <XAxis tickFormat={v => `${v}`} tickLabelAngle={-90} title='dias'/>
                    <YAxis title={this.props.titleEixoY} tickFormat={v => `${v} ${this.state.unidade}`}/>
                </XYPlot>
            </div>
        )
    }
}

export default MyChart