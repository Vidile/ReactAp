import { forwardRef } from "react";
import {useHistory} from 'react-router-dom'
import Form from "../components/meetups/forms";
function NewMeetUpsPage() {
    const history = useHistory()

  function onAddMeetupHandler(meetupData) {
    fetch("https://react2-e3324-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(()=>{
        history.replace('/');
    });
  }
  return (
    <section>
      <h1> Add new meetup</h1> 
      <Form onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetUpsPage;

//https://react2-e3324-default-rtdb.firebaseio.com/
