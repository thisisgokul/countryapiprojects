
const fetchApi = async () => {
  const Url = 'https://jsonplaceholder.typicode.com/users';

  await fetch(Url).then((response)=>response.json())
  .then((data)=>{
    console.log(data);
    const first=document.getElementById("texts")
     
    data.forEach((user) => {

      const divContents=document.createElement("div")

      divContents.innerHTML=`
      <h1>${user.id} Name:${user.name}<h1/>
      <h2>UserName:${user.username}<h2/>
      <h3>Email:${user.email}<h3/>
      <h4>${user.phone}</h4>
      <p><strong>Address:</strong>${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}</p>
      `
      first.appendChild(divContents)
    });


  })

}

fetchApi()



