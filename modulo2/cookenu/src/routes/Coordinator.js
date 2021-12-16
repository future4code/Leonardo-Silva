export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToAddRecipes = (navigate) => {
    navigate("/add-receita")
}

export const goToRecipesDetail = (navigate, id) => {
    console.log(id)
    navigate(`/receitas/${id}`)
}

export const goToRecipesList = (navigate) => {
    navigate("/")
}