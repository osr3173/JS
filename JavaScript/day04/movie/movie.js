const minus = document.querySelector(".minus");

const plus = document.querySelector(".plus");

const ticketspan = document.querySelector(".ticketamount");

const totalpricespan = document.querySelector(".totalprice");

plus.addEventListener("click", () => {
  const ticketcount = Number(ticketspan.innerText) + 1;
  const ticketprice = ticketcount * 10000;
  if (ticketcount >= 10) {
    totalpricepan.innerText = ticketprice * 0.8;
  } else if (ticketcount > 5) {
    totalpricespan.innerText = ticketprice * 0.9;
  } else {
    totalpricespan.innerText = ticketprice * 1;
  }
  ticketspan.innerText = Number(ticketspan.innerText) + 1;
});

minus.addEventListener("click", () => {
  const ticketcount = Number(ticketspan.innerText) - 1;
  const ticketprice = ticketcount * 10000;
  if (ticketcount >= 10) {
    totalpricespan.innerText = ticketprice * 0.8;
    ticketspan.innerText = Number(ticketspan.innerText) - 1;
  } else if (ticketcount >= 5) {
    totalpricespan.innerText = ticketprice * 0.9;
    ticketspan.innerText = Number(ticketspan.innerText) - 1;
  } else if (ticketcount < 5 && ticketcount > 0) {
    totalpricespan.innerText = ticketprice * 1;
    ticketspan.innerText = Number(ticketspan.innerText) - 1;
  } else {
    totalpricespan.innerText = 0;
    ticketspan.innerText = 0;
  }
});
