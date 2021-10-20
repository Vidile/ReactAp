import { createContext, useState } from "react";
import meetUpItem from "../components/meetups/MeetupItem";
const FavoritesContext = createContext({
  favorites: [],
  totalfavorites: 0,
  addFavorite: (FavoriteMeetup) => {},
  removeFavorites: (meetUpId) => {},
  itemIsFavorites: (meetUpId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritehandler(Favorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(Favorite);
    });
  }
  function removeFavoritehandler(meetUpId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(
        (meetUpItem) => meetUpItem.id !== meetUpId
      );
    });
  }
  function itemIsFavoriteHandler(meetUpId) {
    return userFavorites.some((meetUpItem) => meetUpItem.id === meetUpId);
  }
  const context = {
    favorites: userFavorites,
    totalfavorites: userFavorites.length,
    addFavorite: addFavoritehandler,
    removeFavorite: removeFavoritehandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;