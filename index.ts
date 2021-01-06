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

/////////XML
document
  .getElementById("show_xml_btn")
  .addEventListener("click", xml_btn_clicked);

function xml_btn_clicked() {
  log_timestamp();
  let xml_request = new XMLHttpRequest();
  xml_request.open("GET", data_address_2);
  xml_request.onload = function() {
    alert();
  };
  xml_request.send();
}
