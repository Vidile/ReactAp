import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritePage() {
  const fav = useContext(FavoritesContext);
  let contente;

  if(fav.totalfavorites===0){
    contente = <p>No favorites</p>
  }
  else{
    contente = <MeetupList meetups={fav.favorites} />
  }


  return <section>
    <h1>My Favorites</h1>
    {contente}
  </section>

}

export default FavoritePage;
