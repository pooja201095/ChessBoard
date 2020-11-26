import React, { Fragment } from 'react';

class Cube extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            theme: 'black',
            dimention: 8
        }
        this.changeColor = this.changeColor.bind(this);
    }

    renderCubes=()=>{
        let arr = new Array(this.state.dimention).fill(0);

        let eles = arr.map(()=><li className={this.state.theme}></li>)
        // for(let i=0;i<this.state.dimention;i++){
        //     for(let j=0;j<this.state.dimention;j++){
        //         return <div className={this.state.theme}>{j}</div>
        //     }
        // }
        let rows = arr.map(()=><ul>{eles}</ul>)
        return (
            <div>
                {rows}
            </div>
        );
    } 

    changeColor() {
        this.setState({
            theme:'red',
            dimention:12
        })
    }

    render(){
        return (
            <Fragment>
            {this.renderCubes()}
            <button onClick={this.changeColor}>Change</button>
            </Fragment>
        )
    }
}
export default Cube;