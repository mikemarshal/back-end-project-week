import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deleteNote } from '../actions';

class singleNote extends Component {
  state = {
    title: this.props.id,
    oldtitle: this.props.id,
    meat: this.props.note[this.props.id].meat,
    redirect: false,
  };
  render() {
    return (
      <div className="Home__Right">

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.closeModal}>&times;</span>
            <p>Are you sure you want to delete this?</p>
          <div className="modal-actions">
            <NavLink to='/viewnotes'>
              <div className="modal-actions-delete" onClick={this.deleteModal}>
                Delete
              </div>
            </NavLink>
            <div className="modal-actions-no" onClick={this.closeModal}>
              No
            </div>
          </div>
        </div>
      </div>

        <div className="ViewNotes__Actions">
          <NavLink to={`/editnote/${this.props.id}`}>
            <div className="ViewNotes__Edit">
              <u>edit</u>
            </div>
          </NavLink>
          <div className="ViewNotes__Delete" onClick={this.showModal}>
            <u>delete</u>
          </div>
        </div>
        <div className="Right__Containers">
          <div className="CreateNote__Text">
            {this.props.id}
          </div>
          <div className="CreateNote__Content">
            {this.state.meat}
          </div>
        </div>
      </div>
    )
  }
  showModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
  closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
  deleteModal = () => {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    console.log(this.props);
    // this.props.deleteNote(this.props.id);
    this.props.deleteNote({
      title: this.props.id, // this is counterintuitive, I know
      id: this.props.note[this.props.id].id
    });
    console.log('modal deleted TEST');
  }
}

const mapStateToProps = (state) => {
  return {
    note: state.Notes
  };
};

export default connect(mapStateToProps, { deleteNote })(singleNote);
