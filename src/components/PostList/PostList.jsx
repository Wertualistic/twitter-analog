import React from 'react'
import PostListItem from '../PostListItem/PostListItem'

function PostList({posts, onDelete, onToggleImportant, onToggleLiked}) {
  return (
    <div>
        <ol className='app-list list-group'>
            {posts.map(post => {
              const {id, ...itemProps} = post;
              return(
                <PostListItem {...itemProps} key={id} id={id} onDelete={() => onDelete(id)} onToggleImportant={() => onToggleImportant(id)} onToggleLiked={() => onToggleLiked(id)}/>
              )
            })}
        </ol>
    </div>
  )
}

export default PostList