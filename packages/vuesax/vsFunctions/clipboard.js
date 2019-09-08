const clipboard = (text) => {
  var aux = document.createElement("textarea");
  aux.value = text
  aux.className = "vs-clipboard"
  document.body.appendChild(aux);
  aux.focus();
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

export default clipboard
