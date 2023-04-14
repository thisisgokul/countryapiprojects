
const fetchData = async () => {
  try {
    await fetch("https://restcountries.com/v3.1/all").then((res) => res.json())
      .then((data) => {
        
        countrySelect = document.getElementById("selectCountry");

        data.map((country) => {
          opts = document.createElement("option")
          opts.text = country.name.common
          opts.value = country.name.common
          countrySelect.appendChild(opts)
        });

        const chooseCountry = document.querySelector('select');
        const detailsContainer = document.createElement('div');
        chooseCountry.addEventListener('change', () => {
          const selectedCountry = chooseCountry.value;
          fetch(`https://restcountries.com/v3.1/name/${selectedCountry}?fullText=true`)
            .then(response => response.json())
            .then(data => {
              console.log(data[0]);
              const country = data[0];
              const details =` 
              <h2>${country.name.common}</h2>
              <p>Capital: ${country.capital}</p>
              <p>Population: ${country.population}</p>
              <p>Region: ${country.region}</p>
              <img src="${country.flags.svg}" alt="${country.name.common}">
              `;
              detailsContainer.innerHTML = details;
              document.body.appendChild(detailsContainer);
            })
            
        });

      })

  } catch (error) {
    console.log(error);
  }

}


fetchData()