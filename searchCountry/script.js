let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value
    const api = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    const fetchData = async () => {
        try {
            await fetch(api).then((res) => res.json())
                .then((data) => {
                    console.log(data[0]);
                    firstEle.innerHTML = `
                    <h1>${data[0].name.common}</h1>
                    <h4><strong>Capital</strong>:${data[0].capital}</h4>
                    <h4><strong>Continent</strong>:${data[0].continents}</h4>
                    <h4><strong>population</strong>:${data[0].population}</h4>
                    <h4>Currency:${data[0].currencies[Object.keys(data[0].currencies)].name}</h4>
                    <img class='countryImg' src="${data[0].flags.svg}" class="flag-img">
                    `
                })
        } catch (error) {
            console.log(error);

        }

    }

    fetchData()
})

