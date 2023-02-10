import React from "react";

export default class PostListItem extends React.Component{
  render(){
    const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;

    let classNames = 'app-list-item d-flex justify-content-between'
    if(important){
      classNames += ' important'
    }

    let likeClass = 'ri-heart-fill'
    if(like){
      likeClass += ' like'
    }

    return(
      <li className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>{label}</span>
        <div className="btn-group d-flex align-items-center justify-content-center">
          <button 
          type="button" 
          className="btn-star btn-sm"
          onClick={onToggleImportant}>
            <i className="ri-star-fill"></i>
          </button>
          <button type="button" onClick={onDelete} className="btn-trash btn-sm">
            <i className="ri-delete-bin-line"></i>
          </button>
          <i className={likeClass}></i>
        </div>
      </li>
    )
  }
}
