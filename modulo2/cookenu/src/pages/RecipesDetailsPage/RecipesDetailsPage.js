import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { UrlBase } from '../../constants/Urls'
import { ScreenContainer, RecipeContainer, RecipeImage } from './styled'
import { Typography } from '@mui/material'
import Loading from '../../constants/Loading'

const RecipesDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData({}, `${UrlBase}/recipe/${params.id}`)[0]
    return(
        <ScreenContainer>
            {recipe ?
            <RecipeContainer>
                <RecipeImage src={recipe.image}/>
            <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
            <Typography align={'center'}>{recipe.description}</Typography>
            </RecipeContainer> : <Loading/>}
        </ScreenContainer>
    )
}

export default RecipesDetailsPage