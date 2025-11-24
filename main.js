javascript:(function(){
  const meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "width=device-width,initial-scale=1";
  document.head.appendChild(meta);
  const frmst = document.querySelector("frameset");
  frmst.setAttribute("cols", "*");
  frmst.setAttribute("rows", "300,*");
  const brs = frames["yui"].document.querySelectorAll("br");
  const rms = [0, 2, 3, 4, 5, 6, 8, 8, 10, 11];
  for (let i = 0; i < rms.length; i++) {
    brs[rms[i]].remove();
  }
  frames["yui"].document.kov.removeAttribute("onSubmit");
})();
