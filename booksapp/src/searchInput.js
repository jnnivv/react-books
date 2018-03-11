import React, { Component } from 'react';
import './App.css';
import './SearchInput.css';
import Autocomplete from 'react-autocomplete'

class SearchInput extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
    this.menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '12px 18px',
      fontSize: '90%',
      position: 'absolute',
      top: '38px', // height of your input
      left: 0,
      overflow: 'auto',
      width: '100%',
      minWidth: '50px'
    }


  }


  render(props) {
    return (
      <Autocomplete
        items={[
          { id: 'foo', label: 'foo' },
          { id: 'bar', label: 'bar' },
          { id: 'baz', label: 'baz' },
        ]}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent', padding: '12px'}}
          >
            {item.label}
          </div>
        }
        menuStyle={this.menuStyle}
        inputProps = {{placeholder: 'Search for a book...'}}
        wrapperProps={{ style: {} }}
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.setState({ value })}
      />
    )
  }
}



export default SearchInput;