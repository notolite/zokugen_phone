javascript:(function(){
  const frmst = document.querySelector("frameset");
  frmst.removeAttribute("cols");
  frmst.setAttribute("rows", "300,*");
});
