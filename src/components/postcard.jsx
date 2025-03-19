import React from 'react'
import './post.css'
import LikeButton from './likebutton'

export default function PostCard({ initialPost }) {
  return (
    <div className='post'>
      <img src={initialPost.profileImage} style={{height : '210px', width : '230px'}}/>
      <h3 style={{textAlign : 'center'}}>{initialPost.username}</h3>
      <p>{initialPost.content}</p>
      <LikeButton isLiked={initialPost.isLiked}/>
    </div>
  )
}
