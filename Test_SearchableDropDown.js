import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
  {
    id: 1,
    name: 'JavaScript',
    first_name:'first name'
  },
  {
    id: 2,
    name: 'Java',
    first_name:'first name'
  },
  {
    id: 3,
    name: 'Ruby',
    first_name:'first name'
  },
  {
    id: 4,
    name: 'React Native',
    first_name:'first name'
  },
  {
    id: 5,
    name: 'PHP',
    first_name:'first name'
  },
  {
    id: 6,
    name: 'Python',
    first_name:'first name'
  },
  {
    id: 7,
    name: 'Go',
    first_name:'first name'
  },
  {
    id: 8,
    name: 'Swift',
    first_name:'first name'
  },
];
export default class Test_SearchableDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: ''
    }
  }
  render() {
  return (
        <Fragment>
          
          <SearchableDropdown
            onItemSelect={(item) => {
              this.setState({ selectedItems: item });
              console.log('selected: ',item)
            }}
            containerStyle={{ padding: 5 }}
            
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={0}
            resetValue={false}
            textInputProps={
              {
                placeholder: "placeholder",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                },
                onTextChange: text => alert(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
  );
  }
}