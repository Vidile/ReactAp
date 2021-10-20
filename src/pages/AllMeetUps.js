import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //Se usa o useEffect, pois se não utilizar o Fetch causa um loop infinito, esse é um erro comum de programação.
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react2-e3324-default-rtdb.firebaseio.com/meetups.json")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        //Acessar o objeto nestado dentro do data que vem do firebase e o distribui para criar novos objetos que serão passados para a lista de meetups
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    <section>
      <p>Carregando...</p>
    </section>;
  }
  return (
    <section>
      <div>
        <h1>All Meet Ups</h1>
        <MeetupList meetups={loadedMeetups} />
      </div>
    </section>
  );
}

export default AllMeetUpsPage;
