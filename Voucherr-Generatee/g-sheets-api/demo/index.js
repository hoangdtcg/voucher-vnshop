import GSheetProcessor from '../src/gsheetsprocessor.js'

// test Sheet url
// const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1-CmQumuz5ZiOvINhphEMgfplrJacQhD623RROcOBTAg/edit?usp=sharing';
const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1FcOFqx8YAMatb2LzTxgatz1MIohsXEtiRE-_DCbqZwg/edit?usp=sharing';

// test sheet id
const demoSheetId = '1FcOFqx8YAMatb2LzTxgatz1MIohsXEtiRE-_DCbqZwg';

const options = {
  sheetId: '1FcOFqx8YAMatb2LzTxgatz1MIohsXEtiRE-_DCbqZwg',
  returnAllResults: false,
}

// GSheetProcessor(options, results => {
//
//   const table = document.createElement('table');
//   const header = table.createTHead();
//   const headerRow = header.insertRow(0);
//   const tbody = table.createTBody();
//
//   // First, create a header row
//   Object.getOwnPropertyNames(results[0]).forEach(colName => {
//     const cell = headerRow.insertCell(-1);
//     cell.innerHTML = colName;
//   });
//
//   // Next, fill the rest of the rows with the lovely data
//   results.forEach(result => {
//     const row = tbody.insertRow(-1);
//
//     Object.keys(result).forEach(key => {
//       const cell = row.insertCell(-1);
//       cell.innerHTML = result[key];
//     })
//   });
//
//   const main = document.querySelector('#output');
//   main.innerHTML = "";
//   main.append(table);
// });
let customers = [];
// let str = `Cảm ơn KH đã luôn đồng hành cùng VnShop. VnShop xin gửi tới quý KH voucher của chương trình mời bạn tại Group "Nhà tiện ích - Bếp thông minh" có giá trị giảm tới 40% tối đa 20K, HSD tới hết ngày 31/05/2020: `
GSheetProcessor(options, results => {
  customers = Array.from(results);
  $().ready(function () {
    $('button').click(function() {
      let str = $('#txt').val();
      console.log(str);
      for (let i = 0; i < customers.length; i++) {
        $("#dataTable").append(`<tr><td>${str} <strong>${customers[i].user}</strong></td></tr>`);
      }
      $('textarea').hide();
      $('p').hide();
      $('button').hide();
    });
    // $('#dataTable').DataTable( {
    //   dom: 'Bfrtip',
    //   buttons: [
    //     'copy', 'csv', 'excel', 'pdf', 'print'
    //   ]
    // } );
  });

});
