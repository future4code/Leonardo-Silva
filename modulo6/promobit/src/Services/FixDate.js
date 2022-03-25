export const FixDate = (release_date) => {
    const newDate = release_date.split("-")

    switch(newDate[1]){
        case "01":
            return `${newDate[2]} JAN ${newDate[0]}`
        case "02":
            return `${newDate[2]} FEV ${newDate[0]}`
        case "03":
            return `${newDate[2]} MAR ${newDate[0]}`
        case "04":
            return `${newDate[2]} ABR ${newDate[0]}`
        case "05":
            return `${newDate[2]} MAI ${newDate[0]}`
        case "06":
            return `${newDate[2]} JUN ${newDate[0]}`
        case "07":
            return `${newDate[2]} JUL ${newDate[0]}`
        case "08":
            return `${newDate[2]} AGO ${newDate[0]}`
        case "09":
            return `${newDate[2]} SET ${newDate[0]}`
        case "10":
            return `${newDate[2]} OUT ${newDate[0]}`
        case "11":
            return `${newDate[2]} NOV ${newDate[0]}`
        case "12":
            return `${newDate[2]} DEZ ${newDate[0]}`
        default:
            return `${newDate[2]} ${newDate[1]} ${newDate[0]}`
    }
}
