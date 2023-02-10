import React from 'react'

export default class PostAddForm extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        input: ''
      }
      this.changeHandler = this.changeHandler.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
    }

    changeHandler = (e) => {
      this.setState({ input: e.target.value });
    };

    onSubmit(e) {
      e.preventDefault()
      this.props.onAdd(this.state.input)
      this.setState({
        input: ''
      })
    }

  render(){
    return(
      <form className='d-flex bottom-panel' onSubmit={this.onSubmit}>
        <input 
            type="text"
            placeholder='What are you thinking about?'
            className='form-control new post label'
            name='input'
            value={this.state.input}
            onChange={this.changeHandler}
            required
        />
        <button className='btn btn-outline-secondary'>Add</button>
    </form>
    )
  }
}