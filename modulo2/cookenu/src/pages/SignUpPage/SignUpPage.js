import { React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ScreenContainer,LogoImage,InputsContainer, SignUpButtonContainer } from './styled'
import logo from '../../assets/logo.png'
import { TextField, Button } from '@mui/material'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { CircularProgress } from '@mui/material'

const SignUpPage = ({setRightButton}) => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({name: "", email: "", password: ""})
    let navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButton, setIsLoading)
    }

    return(
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                <TextField
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        id="standard-basic" label="Nome" variant="standard"
                        type="text"
                        fullWidth
                        required
                        margin='normal'
                    />
                    <TextField
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        id="standard-basic" label="Novo email" variant="standard"
                        type="email"
                        fullWidth
                        required
                        margin='normal'
                    />
                    <TextField
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        id="standard-basic" label="Nova senha" variant="standard"
                        type="password"
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
                    >{isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Cadastrar</>}</Button>
                </form>
            </InputsContainer>

        </ScreenContainer>
    )
}

export default SignUpPage