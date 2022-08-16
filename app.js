const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (event) => filterData(event.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    // const data = await res.json()
    const { results } = await res.json()

    // console.log(data) this is to check if we fetch the right api properly
    // to clear the loading We have to remove the "s" from results to correspnd to the const result at the top
    result.innerHTML = ''

    results.forEach(user => {
        // console.log(user) to check if we got all the users
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
        `
        result.appendChild(li)
    })
}

// user.picture.large are based on the api, this is choose the user picture large version.. it could also be user.phone for the phone number


// the fuction below is to represent what we are searching for when typing
// function filterData(searchTerm) {
//     console.log(searchTerm)
// }
// use this searchterm and console.log it to chech if whatever you are typing in search shows up in console

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.
        toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}