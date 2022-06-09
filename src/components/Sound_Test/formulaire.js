import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props) {
          super(props);
          this.state = {value: 'Sound_1'};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          event.preventDefault();
          const data = JSON.stringify(this.state)
          console.log(data)
        }
      
        render(handleSampleChange) {
          return (
            <form action="my_redirect_url" method="get" onSubmit={this.handleSubmit}>
              <label>
                Choisissez votre parfum favori :
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Sound_1">Sound_1</option>
                  <option value="Sound_2">Sound_2</option>
                  <option value="Sound_3">Sound_3</option>
                  <option value="Sound_4">Sound_4</option>
                </select>
              </label>
              <input type="submit" value="Envoyer" onChange={handleSampleChange} />
              <h1>{this.state.value}</h1>
            </form>
          );
        }
      }
