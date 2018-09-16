import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import style from '../Assets/style.css';



class Brands extends Component {

 constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      advertiserName:'',
       brandData:[]

    };    
     this.getData=this.getData.bind(this);

  }

  getData() {
  	var self=this;
  const url = `http://hck.re/qmPuPD`;
    fetch (url)
      .then(response => response.json())
      .then(data => {
       self.setState({ brandData: data});
       self.setState({advertiserName:self.state.brandData.map((a)=>a.advertiserName)});

      });
    }



  componentDidMount() {
    this.getData();  
  }
 escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


 getSuggestionValue(suggestion) {
  return suggestion;
}

 renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

getSuggestions(value) {
		debugger;
  const escapedValue = this.escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');
  return this.state.advertiserName.filter(advertiserName => regex.test(advertiserName));
}

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {

    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Enter Brand Name",
      value,
      onChange: this.onChange
    };

    return (
    	<div>
			<div className="leftDiv">
				<span>Advertiser: <Autosuggest 
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
				onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
				getSuggestionValue={this.getSuggestionValue.bind(this)}
				renderSuggestion={this.renderSuggestion.bind(this)}
				inputProps={inputProps} /></span>
				Hello {this.state.value}
        	</div>
        </div>
    );
  }
}


export default Brands;

