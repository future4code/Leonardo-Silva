export const logOut = (navigate) => {
    if (window.confirm("Tem certeza que deseja sair?")) {
        window.localStorage.removeItem("token");
        navigate("/LoginPage")
      }   
}

export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/AdminHomePage/CreateTripPage")
}

export const goToListTripsPage = (navigate) => {
    navigate("/ListTripsPage")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/AdminHomePage")
}

export const goToLoginPage = (navigate) => {
    navigate("/LoginPage")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/ListTripsPage/ApplicationFormPage")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/AdminHomePage/TripDetailsPage/${id}`)
}


