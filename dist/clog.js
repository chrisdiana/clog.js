clog = function (text) {
  var d = document.createElement('div');
  d.style.cssText = 'position:fixed;bottom:0;left:0;background: #282822;width:100%;';
  d.setAttribute("id", "clog");
  d.innerHTML = "<p style=\"font-family:monospace;margin:5px;color:#fff;\"><b>Console: </b>" + text + "</p>";
  document.body.appendChild(d);
};
