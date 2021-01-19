
const api_url ="http://127.0.0.1:8081/electricity-consumption/get-meter-reads"; 
  

function getMeterReads(startDate, endDate) { 
    
    console.log(startDate);
    
    fetch(api_url+'?startDate='+startDate+'&endDate='+endDate, {
        headers: { 
            'Accept': 'application/json'
        }
        })
      .then((response) => {        
        return response.json()
      })
      .then((data) => {         
        show(data); 
        
      })
      .catch((error) => {
        console.log(error);
      });

}
    


function show(data) { 
    let tab =  
        `<tr> 
          <th>time</th> 
          <th>usage</th>           
         </tr>`; 
    

    for (let r of data) { 
        tab += `<tr>  
                    <td>${r.time} </td> 
                    <td>${r.usage}</td>         
                </tr>`; 
    } 
    
    document.getElementById("meter-reads").innerHTML = tab; 
} 