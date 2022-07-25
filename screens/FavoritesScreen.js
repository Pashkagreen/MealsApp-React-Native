import MealList from "../components/MealsList/MealList";
import {FavoritesContext} from "../store/context/favorites-context";
import {useContext} from "react";
import {MEALS} from "../data/dummy-data";
import {Text, View, StyleSheet} from "react-native";

function FavoritesScreen() {
  const favoritesMealsCtx = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter(meal => favoritesMealsCtx.ids.includes(meal.id))

  if (favoriteMeals.length === 0) {
    return (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no favorite meals yet</Text>
        </View>
    )
  }

  return <MealList items={favoriteMeals}/>
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default FavoritesScreen;
