//F11 function
//Parse the row oriented table to the box oriented table 
function ConvertArray(table){
    //Init verify table
    let to_verify = new Array(9);
    for(let i = 0; i<9; i++){
         to_verify[i] = new Array(9);
    }

    let auxStr;
    //iterates each row
    for(let rowIdx =0; rowIdx < 9; rowIdx++){
        //removes spaces from row string
        auxStr = array_number[rowIdx].replaceAll(' ', '');
        //iterates each column
        for(let colIdx =0; colIdx < 9; colIdx++){
            to_verify[rowIdx][colIdx] = parseInt(auxStr[colIdx]);
        }
    }
    return to_verify
}
//F12 function
//prints an HTML table with the given array table
function DisplayArray(to_verify) {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    for(let rowIdx =0; rowIdx < 9; rowIdx++){
        // creates a table row
        const row = document.createElement("tr");
        for(let colIdx =0; colIdx < 9; colIdx++){
            const cell = document.createElement("td");
            const cellText = document.createTextNode(to_verify[rowIdx][colIdx]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
}

/*The way I thought F11 worked at the beginning
function F11(table){
    //iterates group of 3 boxes
    for(let i =0; i < 3; i++){
        //iterates each of the 3 boxes of the group
        for(let boxIdx =0; boxIdx < 3; boxIdx++){
            //iterates each of row of the box
            for(let rowIdx =0; rowIdx < 3; rowIdx++){
                //fills each element of the row
                to_verify[boxIdx+(i*3)][rowIdx][0] = parseInt(table[rowIdx+(i*3)][0+(boxIdx*6)]);
                to_verify[boxIdx+(i*3)][rowIdx][1] = parseInt(table[rowIdx+(i*3)][2+(boxIdx*6)]);
                to_verify[boxIdx+(i*3)][rowIdx][2] = parseInt(table[rowIdx+(i*3)][4+(boxIdx*6)]);
            }
        }
    }
}

for printing the table
//iterates group of 3 boxes
    for(let i =0; i < 3; i++){
            //iterates each row of the 3 boxes
        for(let rowIdx =0; rowIdx < 3; rowIdx++){
            // creates a table row
            const row = document.createElement("tr");
            //iterates each of the 3 boxes of the group
            for(let boxIdx =0; boxIdx < 3; boxIdx++){
                //iterates element of the row of the box
                for(let colIdx =0; colIdx < 3; colIdx++){
                    const cell = document.createElement("td");
                    const cellText = document.createTextNode(to_verify[0+(i*3)+boxIdx][rowIdx][colIdx]);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
            }
            // add the row to the end of the table body
            tblBody.appendChild(row);
        }
    }

*/