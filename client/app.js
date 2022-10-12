const tableBody = document.getElementById("table-body");

const getFlight = () => {
  fetch("http://localhost:5000/flights")
    .then((response) => response.json())
    .then((flights) => {
      console.log(flights);
    })
    .catch((err) => console.log(err));
};
getFlight();
