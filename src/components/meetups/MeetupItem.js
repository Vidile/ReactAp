import classes from "./MeetUpItem.module.css";
import Card from "../UI/Card";
import { useContext } from "react";
import  FavoritesContext  from "../../store/favorites-context";
import { doc, deleteDoc } from "firebase/firestore";

//Cards separados
function meetUpItem(props) {

  //Troca os estados para favorito e não favorito
  const Fav = useContext(FavoritesContext);

  const itemIsFavorite = Fav.itemIsFavorite(props.id)
  
  function toogleFavoriteHandler(){
    if(itemIsFavorite){
      Fav.removeFavorite(props.id)
    }
    else{
      Fav.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      }
        
      )
    }
  }


  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img
            className={classes.image}
            src={props.image}
            alt={props.title}
          ></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toogleFavoriteHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'} </button>
          <button >Remove Meeting</button>
        </div>
      </Card>
    </li>
  );
}
export default meetUpItem;
