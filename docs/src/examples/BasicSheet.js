import _ from 'lodash';
import React from 'react';
import Datasheet from '../lib/DataSheet';

const basic = [
  [
    {readOnly: true, value: ''},
    {value: 'A', readOnly: true},
    {value: 'B', readOnly: true},
    {value: 'C', readOnly: true}
  ],
  [{readOnly: true, value: 1}, {value: 1}, {value: 3}, {value: 3}],
  [{readOnly: true, value: 2}, {value: 2}, {value: 4}, {value: 4}],
  [{readOnly: true, value: 3}, {value: 1}, {value: 3}, {value: 3}],
  [{readOnly: true, value: 4}, {value: 2}, {value: 4}, {}]
];

const withExpr = [  
  [
    {readOnly: true, value: ''},
    {value: 'A', readOnly: true},
    {value: 'B', readOnly: true},
    {value: 'C', readOnly: true}
  ],
  [{readOnly: true, value: 1}, {value: 5}, {value: 5, expr: '1 + 4'}, {}],
  [{readOnly: true, value: 2}, {value: 6}, {value: 6, expr: '1 + 4'}, {}]
]

const withComponent = [
  [
    {readOnly: true, value: ''},
    {value: 'A', readOnly: true},
    {value: 'B', readOnly: true},
    {value: 'C', readOnly: true}
  ],
  [{readOnly: true, value: 1}, {value: 5}, {value: 5, expr: '1 + 4'}, {}],
  [{readOnly: true, value: 2}, {value: 6}, {value: 6, expr: '2 + 4'}, {}],
  [{readOnly: true, value: 3}, {value:  5, component: (<button> press me </button>)}, {}, {}]
]

const attr = [
  [
    {readOnly: true, value: ''},
    {value: 'A', readOnly: true},
    {value: 'B', readOnly: true},
    {value: 'C', readOnly: true}
  ],
  [{readOnly: true, value: 1}, {value: 5}, {value: 5, expr: '1 + 4'}, {}],
  [{readOnly: true, value: 2}, {value: 1, attr: {color: 'red'}}, {value: 3}, {}],
]

export default class BasicSheet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grid: attr
    }
  }

  onChanged = (changes) => {
    const grid = this.state.grid.map(row => [...row]);
    changes.forEach(({cell, row, col, value}) => {
      grid[row][col] = {...grid[row][col], value}
    });
    this.setState({grid});
    console.log(new Date());
  }

  render () {
    return (
      <Datasheet
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        dataRenderer={(cell) => cell.expr}
        onCellsChanged={this.onChanged}
        attributesRenderer={
          (cell) => { return {'style': cell.attr || {}} }
        }
      />
    )
  }
}
