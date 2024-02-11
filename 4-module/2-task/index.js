function makeDiagonalRed(table) {

  let tableRows = table.rows;

  tableRows = Array.from(tableRows);

  for (let tr = 0 ; tr < tableRows.length ; tr++) {

    let tableCells = tableRows[tr].cells;

    for (let td = 0; td < tableCells.length; td++) {

      if (tr == td) {

        tableCells[td].style.backgroundColor = 'red';
      }
    }

  }





 



}
