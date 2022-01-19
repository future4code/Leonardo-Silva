import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScreenContainer,LogoImage,InputsContainer, SignUpButtonContainer } from './styled'
import logo from '../../assets/logo.png'
import { TextField, Button } from '@mui/material'
import useForm from '../../hooks/useForm'
import { goToSignUp } from '../../routes/Coordinator'
import { login } from '../../services/user'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { CircularProgress } from '@mui/material'


const LoginPage = ({setRightButton}) => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButton, setIsLoading)
    }

    return(
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        id="standard-basic" label="Email" variant="standard"
                        type="email"
                        fullWidth
                        required
                        margin='normal'
                    />
                    <TextField
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        id="standard-basic" label="Senha" variant="standard"
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
                    >{isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>Fazer Login</>}</Button>
                </form>
            </InputsContainer>
            <SignUpButtonContainer>
                <Button
                    type="submit"
                    margin="normal"
                    fullWidth
                    color="primary"
                    variant="text"
                    onClick={() => goToSignUp(navigate)}
                >Cadastre-se</Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage