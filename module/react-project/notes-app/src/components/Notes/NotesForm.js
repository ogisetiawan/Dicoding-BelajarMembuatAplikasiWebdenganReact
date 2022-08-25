import React from "react";

class NotesForm extends React.Component {
  constructor(props) {
    super(props);

    //? init state
    this.state = {
      title: "",
      body: "",
      archived: false,
      createdAt: new Date().toDateString(),
      charCount: 0,
      charLeft: 50,
    };

    //? init event binding
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //? setState in eventHandling
  onTitleChange(event) {
    const charCount = event.target.value.length;
    const charLeft = 50 - charCount;
    this.setState(() => {
      return {
        title: event.target.value,
        charCount: charCount,
        charLeft: charLeft,
      };
    });
  }

  onDescChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.state.charCount > 50){
      alert('Title cannot be more than 50');
    }else{
      this.props.addNotes(this.state); //? get props and call component outer (addNotes)
      //? clear state after passing
      this.setState({
        title: "",
        body: "",
      });
    }
  }
  

  render() {
    return (
      <form className="bg-light p-3 mt-4 rounded" onSubmit={this.onSubmit}>
        <div className="form-floating mb-3">
          {/* //? set value to eventHandling */}
          <input type="text" className="form-control" value={this.state.title} onChange={this.onTitleChange} required />
          <label>Title</label>
          <div className="form-text">Characters left : {this.state.charLeft}</div>
        </div>
        <div className="form-floating mb-3">
          <textarea rows="2" className="form-control h-25"  value={this.state.body} onChange={this.onDescChange} required></textarea>
          <label>Description</label>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    );
  }
}

export default NotesForm;
