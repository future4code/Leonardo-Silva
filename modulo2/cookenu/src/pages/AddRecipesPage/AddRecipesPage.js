import {React, useState} from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { TextField, Button } from '@mui/material'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { ScreenContainer, InputsContainer, StyledH1 } from './styled'
import { createRecipe } from '../../services/recipe'
import { CircularProgress } from '@mui/material'

const AddRecipesPage = () => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({title: "", description: "", image: ""})
    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear, setIsLoading)
    }

    return(
        <ScreenContainer>
            <StyledH1>Adicionar Nova Receita</StyledH1>
            <InputsContainer>
            <form onSubmit={onSubmitForm}>
                    <TextField
                        name="title"
                        value={form.title}
                        onChange={onChange}
                        id="standard-basic" label="Título" variant="standard"
                        type="text"
                        fullWidth
                        required
                        margin='normal'
                    />
                    <TextField
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        id="standard-basic" label="Descrição" variant="standard"
                        type="text"
                        fullWidth
                        required
                        margin='normal'
                    />
                    <TextField
                        name="image"
                        value={form.image}
                        onChange={onChange}
                        id="standard-basic" label="Imagem" variant="standard"
                        type="text"
                        fullWidth
                        required
                        margin='normal'
                    /><br/><br/>
                    <Button
                        type="submit"
                        margin="normal"
                        fullWidth
                        color="primary"
                        variant="contained"
                    >{isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Adicionar Receita</>}</Button>
                </form>
                </InputsContainer>
        </ScreenContainer>
    )
}

export default AddRecipesPage