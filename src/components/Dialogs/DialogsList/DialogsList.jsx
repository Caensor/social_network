import React from 'react';


const DialogsList = (props) => {

let messageItems = props.dialogItem.map(m=> <div>{m.name}</div>  )
  return (
    <div>
      {messageItems}
    </div>

  );
}

export default DialogsList;