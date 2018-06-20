import React from 'react'
import 'react-select/dist/react-select.css'
import  './lib/react-datasheet.css'
import {BasicSheet, MathSheet, ComponentSheet, CustomRendererSheet, OverrideEverythingSheet} from './examples/index';

export default class Demo extends React.Component {
  render () {
    return (
      <div>
        <div className={'container'} >
          <div className={'sheet-container'}>
            <BasicSheet />
          </div>
        </div>
      </div>
    )
  }
}