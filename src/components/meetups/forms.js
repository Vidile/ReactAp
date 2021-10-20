import Card from "../UI/Card";
import classes from "./form.module.css";
import { useRef } from 'react';

function Form(props) {
    const titleInputGraf = useRef()
    const imageInputGraf = useRef()
    const addressInputGraf = useRef()
    const descriptionInputGraf = useRef()

    function submitHandler(event){
        event.preventDefault();
        const enteredtitle = titleInputGraf.current.value;
        const enteredimage =  imageInputGraf.current.value;
        const enteredaddress = addressInputGraf.current.value;
        const entederdescription = descriptionInputGraf.current.value;

        const meetupData ={
            title:enteredtitle,
            image:enteredimage,
            address:enteredaddress,
            description: entederdescription,
        };
        props.onAddMeetup(meetupData);
    }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputGraf}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputGraf} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address"ref={addressInputGraf} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea required rows = '5' id="description" ref={descriptionInputGraf} />
        </div>
        <div className={classes.actions}>
            <button >Add meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default Form;
