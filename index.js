async function getData() {
    try{
           let response=await fetch("http://localhost:3000/data") 
           if(!response.ok){
            throw new Error("Data not found")
           }
           let data = await response.json()
           printData(data)
    }catch(err){
        console.log("Data Failed to fetch");
    }
}

function printData(data){
    let table = document.createElement("table")
    let thead=document.createElement("thead")
    let trow=document.createElement("tr")
    let heading=["id","title","price","description","category","image"]
    heading.forEach(obj=>{
        let th=document.createElement("th");
        th.innerText=obj;
        trow.appendChild(th)
    })

    let tbody=document.createElement("tbody")
    data.forEach(obj=>{
        tr=document.createElement("tr")
        for(let key in obj){
            let td=document.createElement("td")
            if(key!=="rating"){
                if(key==="image"){
                    let img=document.createElement("img")
                    img.src=obj[key]
                    td.appendChild(img)
                    tr.appendChild(td)
                }else{
                    td.innerText=obj[key]
                    tr.appendChild(td)  
                }
            }
        }
        tbody.appendChild(tr)
    })
    thead.appendChild(trow)
    table.append(thead,tbody)
    document.body.appendChild(table)
}
getData();