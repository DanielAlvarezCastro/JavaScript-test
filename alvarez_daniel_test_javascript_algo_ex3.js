//F31 function
//Checks if rows are good
function CheckingRows(checkbox){
    let anomaly = false;
    //just calls F21 for every row of the table
    for(let i =0; i < 9; i++){
        if(!CorrectSequence(checkbox[i])){
            displayAnomaly(`Line ${i+1} incorrect`, checkbox[i]);
        }
    }
}

//F32 function
//Checks if collumns are good
function CheckingColumns(checkbox){
    let auxArray;
    for(let i =0; i < 9; i++){
        //Calls the fuction to get a column
        auxArray = getColumnByIndex(checkbox, i);
        if(!CorrectSequence(auxArray)){
            displayAnomaly(`Column ${i+1} incorrect`, auxArray);
        }
    }
}

//F33 function
//Checks if regions are good
function CheckingRegions(checkbox){
    let auxArray;
    //index to keep count of what region are we in
    let aux =0;
    for(let i =0; i < 9; i+=3){
        for(let j =0; j < 9; j+=3){
            aux++;
            //Calls the fuction to get a region
            auxArray = getRegionByIndex(checkbox, i, j);
            if(!CorrectSequence(auxArray)){
                displayAnomaly(`Region ${aux} incorrect`, auxArray);
            }
        }
    }
}

//Given the table and an horizontal index returns that vertical column
function getColumnByIndex(checkbox, idx){
    let result = [];
    for(let i =0; i < 9; i++){
        result.push(checkbox[i][idx]);
    }
    return result;
}

//Given a 2-dimensional index returns the region array
function getRegionByIndex(checkbox, x, y){
    let result = [];
    for(let i =x; i < x+3; i++){
        for(let j =y; j < y+3; j++){
            result.push(checkbox[i][j]);
        }
    }
    return result;
}

//This function creates an empty table on the HTML body so it can be used later to display the anomalies
function createAnomalyTable(){
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    tblBody.setAttribute("id", "anomalies");
}

//Creates a new row in the anomaly table with the anomaly info
function displayAnomaly(messageStr, array){
    console.log(messageStr + array);
    //Gets the HTML table from the main
    const tblBody = document.getElementById("anomalies");
    // creates a table row
    const row = document.createElement("tr");
    //creates the message element
    const cell = document.createElement("td");
    const cellText = document.createTextNode(messageStr);
    cell.appendChild(cellText);
    row.appendChild(cell);
    //create the table elements for the array 
    for(let i =0; i < 9; i++){
        const cell = document.createElement("td");
        const cellText = document.createTextNode(array[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
}