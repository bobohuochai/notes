import React,{useState,useEffect} from 'react'

function useFriendStatus(friendID) {
  const [isOnline,setIsOnline] = useState(null)

  function handleStatusChange(status){
    setIsOnline(status)
  }

  useEffect(()=>{
    ChatAPI.subscribeToFriendStatus(friendID,handleStatusChange)
    return ()=>{
      ChatAPI.unsubscribeFromFriendStatus(friendID,handleStatusChange)
    }
  })

  return isOnline
}

function FriendStatus(props){
  const isOnline = useFriendStatus(props.friend.id)

  if(isOnline ===null){
    return 'Loading...'
  }

  return isOnline ? 'Online':'Offline'
}

function FriendListItem(props){
  const isOnline = useFriendStatus(props.friend.id)
  
  return (
    <li style={{color:isOnline?'green':'black'}}>
      {props.friend.name}
    </li>
  )
}