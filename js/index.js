function subscribeSomeoneToMailChimpList()
{
  var options =
  {
    "apikey": "a40250fd4767ca9bc5bcdcf6ed7b1781-us12",
    "id": "2be9a8098e",
    "email":
    {
      "email": document.getElementById("userEmail").value;
    },
      "double_optin": false,
    "send_welcome": false
  };
  var mcSubscribeRequest = UrlFetchApp.fetch("https://us12.api.mailchimp.com/2.0/lists/subscribe.json", options);
  var mcListObject = Utilities.jsonParse(mcSubscribeRequest.getContentText());
}