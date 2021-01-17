// Import stylesheets
import "./style.css";
////addresses
const data_address_1 =
  "https://learnwebcode.github.io/json-example/animals-1.json";
const data_address_2 = "https://www.w3schools.com/js/cd_catalog.xml";

const log_timestamp = () => {
  console.clear();
  let timestamp = new Date();
  let time = `${timestamp.getHours()}:${timestamp.getMinutes()}`;
  console.log(time);
};

//////JSON
document
  .getElementById("show_json_btn")
  .addEventListener("click", json_btn_clicked);

function json_btn_clicked() {
  log_timestamp();
  const json_request = new XMLHttpRequest();
  json_request.open("GET", data_address_1);
  json_request.onload = function() {
    const data = json_request.responseText; //// string
    console.log(JSON.parse(data));
  };
  json_request.send();
}
