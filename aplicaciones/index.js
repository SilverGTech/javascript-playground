let people = []

function addPeople(name, lastName, age) {
    people.push({
        "name": name,
        "lastName": lastName,
        "age": age
    })
}

function renderPeople() {
    let list = document.getElementById("people")
    people.forEach((person) => {
        let listItem = document.createElement("li")
        listItem.textContent = `${person.name} ${person.lastName} ${person.age}`
        list.appendChild(listItem)
    })
}

function clearPeople() {
    let list = document.getElementById("people")
    list.innerHTML = ""
}

function submit() {
    let name = document.getElementById("name");
    let lastName = document.getElementById("lastname");
    let age = document.getElementById("age")
    clearPeople()
    addPeople(name.value, lastName.value, age.value)
    renderPeople()
}

function filterList(value){
    people = people.filter((person)=> person.name == value)
}

function search() {
    let filter = document.getElementById("search");
    console.log(filter.value)
    filterList(filter.value);
    clearPeople();
    renderPeople();
}
