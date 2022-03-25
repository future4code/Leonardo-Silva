export const removeFilter = (filter, setFilter, id) => {
    const index = filter.findIndex((i) => i === id);

        if(filter[index] !== -1){
            filter.splice(index, 1)
        }

        localStorage.setItem('filter', JSON.stringify(filter))
        setFilter(JSON.parse(localStorage.getItem('filter')))       
}