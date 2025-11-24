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
  const inptfrm = frames["yui"].document.kov;
  inptfrm.removeAttribute("onSubmit");
  inptfrm.addEventListener("submit", () => {
    console.log("hantei1");
    if (!inptfrm.ziko[2].checked && !inptfrm.ziko[3].checked) {
      console.log("hantei");
      if (/[^\x00-\x7F]/.test(inptfrm.rein.value)) {
        inptfrm.ziko[1].checked = true;
      } else {
        inptfrm.ziko[0].checked = true;
      }
    }
  });
})();
