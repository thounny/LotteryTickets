"use strict";

let winningTickets = [
  { tixNum: "1001001", expires: "2022-09-05", prize: 100000 },
  { tixNum: "1298711", expires: "2022-10-10", prize: 250000 },
  { tixNum: "1309182", expires: "2022-12-30", prize: 500000 },
  { tixNum: "1456171", expires: "2023-01-20", prize: 1000000 },
  { tixNum: "3332871", expires: "2022-05-20", prize: 1000000 },
  { tixNum: "4651529", expires: "2022-12-15", prize: 100000 },
  { tixNum: "5019181", expires: "2023-01-31", prize: 250000 },
  { tixNum: "5168261", expires: "2023-03-01", prize: 1000000 },
  { tixNum: "6761529", expires: "2022-12-15", prize: 250000 },
  { tixNum: "7778172", expires: "2023-01-15", prize: 5000000 },
  { tixNum: "8751426", expires: "2020-09-15", prize: 100000 },
];

window.onload = function () {
  loadWinningTicketsTable();
};

function loadWinningTicketsTable() {
  const tbody = document.getElementById("winningTicketsTblBody");

  // Clear any existing rows
  tbody.innerHTML = "";

  // Loop through each winning ticket and add a row
  for (let ticket of winningTickets) {
    buildTicketRow(tbody, ticket);
  }
}

function buildTicketRow(tbody, theTicket) {
  // Create a new row
  let row = tbody.insertRow();

  // Create and append cells for ticket number, prize, and expiration date
  let cell1 = row.insertCell(0);
  cell1.textContent = theTicket.tixNum;

  let cell2 = row.insertCell(1);
  cell2.textContent = `$${theTicket.prize.toLocaleString()}`;

  let cell3 = row.insertCell(2);
  cell3.textContent = theTicket.expires;
}
