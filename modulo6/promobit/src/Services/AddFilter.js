export const addFilter = (setFilter, id) => {
  let localFilter = JSON.parse(localStorage.getItem("filter"));

  if (!localFilter) {
    localFilter = [];
    localStorage.setItem("filter", JSON.stringify([...localFilter, id]));
  } else {
    const idExists = localFilter.find((p) => p === id);
    if (idExists) {
      return;
    }

    localStorage.setItem("filter", JSON.stringify([...localFilter, id]));
    setFilter(JSON.parse(localStorage.getItem("filter")));
  }
};
