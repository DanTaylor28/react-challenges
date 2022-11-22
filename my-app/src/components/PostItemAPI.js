import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
  return (
    props.savedPosts.map(post => {
        const {id, type, user, webformatURL, tags} = post
        return(
            <div key={id} className={css.searchItem}>
                <p>Artwork Type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt=""></img>
                <p>Tags: {tags}</p>
            </div>
        )
    }))
}
  


export default PostItemAPI