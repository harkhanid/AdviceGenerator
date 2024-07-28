function call_api() {
  let text = "";
  let number = "0";
  console.log("saa");
  fetch("https://api.adviceslip.com/advice")
    .then((result) => {
      if (!result.ok) {
        throw new Error("Network response was not ok");
      }
      result.json().then((res) => {
        console.log(res.slip);
        number = res.slip.id;
        text = res.slip.advice;
        $("#advice_text").html(text);
        $("#advice_number").html(number);
      });
    })
    .catch((error) => {
      text = "Please try again later";
      console.log(error);
    });
}

$(document).ready(call_api());
