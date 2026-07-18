(function(){
  "use strict";
  if (localStorage.getItem("mole.consent")) return;
  var css = document.createElement("style");
  css.textContent = "#cookieBanner{position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;"+
    "background:#FFFDF6;color:#3A2A17;border:3px solid #3A2A17;border-radius:16px;"+
    "padding:14px 16px;box-shadow:0 6px 0 rgba(0,0,0,.3);font-family:'Jua',sans-serif;"+
    "display:flex;gap:12px;align-items:center;flex-wrap:wrap;max-width:680px;margin:0 auto;}"+
    "#cookieBanner p{margin:0;font-size:.88rem;line-height:1.5;flex:1;min-width:200px;}"+
    "#cookieBanner a{color:#E86F1F;}"+
    "#cookieBanner button{font-family:inherit;font-size:1rem;color:#fff;cursor:pointer;"+
    "background:linear-gradient(#FF8A3D,#E86F1F);border:2.5px solid #3A2A17;"+
    "border-radius:12px;padding:8px 22px;box-shadow:0 3px 0 #3A2A17;}";
  document.head.appendChild(css);
  var b = document.createElement("div");
  b.id = "cookieBanner";
  b.innerHTML = '<p>\uD83C\uDF6A \uC774 \uC0AC\uC774\uD2B8\uB294 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uACFC \uAD11\uACE0 \uD45C\uC2DC\uB97C \uC704\uD574 \uCFE0\uD0A4\uC640 \uB85C\uCEEC \uC800\uC7A5\uC18C\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uACC4\uC18D \uC774\uC6A9\uD558\uBA74 \uC774\uC5D0 \uB3D9\uC758\uD558\uB294 \uAC83\uC73C\uB85C \uAC04\uC8FC\uB429\uB2C8\uB2E4. This site uses cookies for ads. <a href="/privacy.html">\uC790\uC138\uD788 \uBCF4\uAE30</a></p>'+
    '<button id="consentOk">\uD655\uC778</button>';
  function mount(){
    document.body.appendChild(b);
    document.getElementById("consentOk").addEventListener("click", function(){
      localStorage.setItem("mole.consent", "1");
      b.remove();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
