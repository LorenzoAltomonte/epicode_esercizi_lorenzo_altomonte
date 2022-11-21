let url =" http://localhost:3000/studenti"
let options = {
    method:"GET"
}

// let f = fetch(url)
// let t = f .then((res) =>{

// return res.json()
// })

// t.then((data)=>{

// })

fetch(url).then((res)=>{return res.json()}).then((data)=> {
    data.forEach((e) => {
        let tr = document.createElement("tr")
        let tdNome = document.createElement("td")
        tdNome.innerHTML = e.name
        tr.append(tdNome)
    });
})