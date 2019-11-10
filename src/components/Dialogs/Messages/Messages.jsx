import React from 'react';

const Messages = (props) => {
    

    let message = props.messages.map( m=> <div>{m.message}</div>)

    return (
        <div>
            {message}
        </div>
    )
}
export default Messages;