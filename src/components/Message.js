import React, { useState } from 'react';
import ContactForm from './ContactForm';

function Message(props) {
  const [edit, setEdit] = useState({
    id: null,
    name: '',
    email: '',
    msg: '',
  });

  console.log(props.message);

  const submitUpdate = (value) => {
    props.editMessageItem(edit.id, value);
    setEdit({ id: null, name: '', email: '', msg: '' });
  };

  if (edit.id) {
    return <ContactForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.message.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `message-row complete ${item.email}`
          : `message-row ${item.email}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeMessageItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p onClick={() => setEdit({ id: item.id, name: item.name, email: item.email, msg: item.msg })}> ✏️</p>
      </div>
    </div>
  ));
}

export default Message;
