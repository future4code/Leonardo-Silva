import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage';
import { UrlBase } from '../../constants/Urls';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import useRequestData from '../../hooks/useRequestData';
import { RecipeListContainer, AddRecipeButton } from './styled';
import { Add } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom';
import { goToAddRecipes, goToRecipesDetail} from '../../routes/Coordinator'
import Loading from '../../constants/Loading'

const RecipesListPage = () => {
    let navigate = useNavigate()
    const recipes = useRequestData([], `${UrlBase}/recipe/feed`)
    useProtectedPage()

    const recipeCards = recipes.map((recipe) => {
        return <RecipeCard key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
        />
    })

    const onClickCard = (id) => {
        goToRecipesDetail(navigate, id)
    }

    return(
        <RecipeListContainer>
            {recipeCards.length > 0 ? recipeCards : <Loading/>}
            <AddRecipeButton
            color={'primary'}
            onClick={() => goToAddRecipes(navigate)}
            >
                <Add/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage