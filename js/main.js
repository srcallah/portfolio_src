const _0x54541f=_0x52b9;(function(_0x42e648,_0x49b6eb){const _0x4354a5=_0x52b9,_0x471a8b=_0x42e648();while(!![]){try{const _0x2a6ca5=parseInt(_0x4354a5(0x10d))/0x1*(parseInt(_0x4354a5('0x102'))/0x2)+parseInt(_0x4354a5(0xeb))/0x3*(-parseInt(_0x4354a5(0x108))/0x4)+parseInt(_0x4354a5(0xfa))/0x5*(parseInt(_0x4354a5(0xfe))/0x6)+parseInt(_0x4354a5(0xe9))/0x7+-parseInt(_0x4354a5(0xff))/0x8*(parseInt(_0x4354a5(0xf7))/0x9)+parseInt(_0x4354a5(0x107))/0xa*(-parseInt(_0x4354a5(0xf6))/0xb)+-parseInt(_0x4354a5(0xfb))/0xc*(-parseInt(_0x4354a5('0x109'))/0xd);if(_0x2a6ca5===_0x49b6eb)break;else _0x471a8b['push'](_0x471a8b['shift']());}catch(_0x5c7ee7){_0x471a8b['push'](_0x471a8b['shift']());}}}(_0x5116,0x74bb7));const _0x40a8c8=(function(){let _0x4e9d1c=!![];return function(_0x210aca,_0x33ed56){const _0x41db6a=_0x4e9d1c?function(){if(_0x33ed56){const _0x13af8c=_0x33ed56['apply'](_0x210aca,arguments);return _0x33ed56=null,_0x13af8c;}}:function(){};return _0x4e9d1c=![],_0x41db6a;};}()),_0x1d0b34=_0x40a8c8(this,function(){const _0x2e0328=_0x52b9,_0x23b45d=function(){const _0x22cf09=_0x52b9;let _0x552041;try{_0x552041=Function(_0x22cf09('0x10c')+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x10e020){_0x552041=window;}return _0x552041;},_0x33a12e=_0x23b45d(),_0x28942d=_0x33a12e[_0x2e0328(0xea)]=_0x33a12e[_0x2e0328('0xea')]||{},_0x4e976a=['log',_0x2e0328(0xf9),'info',_0x2e0328('0xfd'),_0x2e0328(0x104),_0x2e0328(0xf4),_0x2e0328(0xf3)];for(let _0x3c228e=0x0;_0x3c228e<_0x4e976a['length'];_0x3c228e++){const _0x5368e6=_0x40a8c8[_0x2e0328('0xef')][_0x2e0328(0xf0)]['bind'](_0x40a8c8),_0x38161b=_0x4e976a[_0x3c228e],_0x3cd391=_0x28942d[_0x38161b]||_0x5368e6;_0x5368e6[_0x2e0328('0xfc')]=_0x40a8c8[_0x2e0328(0xf2)](_0x40a8c8),_0x5368e6[_0x2e0328(0xec)]=_0x3cd391[_0x2e0328(0xec)][_0x2e0328(0xf2)](_0x3cd391),_0x28942d[_0x38161b]=_0x5368e6;}});_0x1d0b34();function _0x52b9(_0x39ceba,_0xef7afb){const _0x2821a5=_0x5116();return _0x52b9=function(_0x1d0b34,_0x40a8c8){_0x1d0b34=_0x1d0b34-0xe9;let _0x30d450=_0x2821a5[_0x1d0b34];return _0x30d450;},_0x52b9(_0x39ceba,_0xef7afb);}function setTime(){const _0x4997bd=_0x52b9,_0x569658=[{'pin':_0x4997bd('0x103'),'location':'subpages/work.html'}],_0x5bd4db=document[_0x4997bd('0xed')](_0x4997bd(0xf5)),_0x409036=document[_0x4997bd('0xed')](_0x4997bd('0xf1')),_0x1ad8ff=document[_0x4997bd('0xed')]('minutes');_0x5bd4db[_0x4997bd(0xee)]('click',function(){const _0x50afe1=_0x4997bd,_0x39e334=_0x409036['value'],_0x1ec7b4=_0x1ad8ff[_0x50afe1(0x105)],_0x9ecd45=''+_0x39e334+_0x1ec7b4,_0x30900a=checkCode(_0x9ecd45,_0x569658);_0x30900a[_0x50afe1('0x100')]>0x0&&_0x30900a[0x0]!==undefined&&window[_0x50afe1('0xf8')](_0x30900a[0x0][_0x50afe1(0x101)],_0x50afe1(0x10a));});}function checkCode(_0x409c5b,_0x49d367){const _0x79f9f1=_0x52b9;return _0x49d367[_0x79f9f1('0x10b')](_0x17d23d=>{if(_0x409c5b===_0x17d23d['pin'])return _0x17d23d;});}function _0x5116(){const _0xce148c=['1697BFoVba','487235xkmfDr','console','3xHcnAn','toString','getElementById','addEventListener','constructor','prototype','hours','bind','trace','table','set','20042WtiHsP','41913TDwpLp','open','warn','3162505MhouON','4108260fINsMS','__proto__','error','6wWHnst','432pCTLbY','length','location','716GCOhFg','0305','exception','value','onload','3260YHlAAv','1313608SsCrpi','13cCNBAY','_self','map','return\x20(function()\x20'];_0x5116=function(){return _0xce148c;};return _0x5116();}window[_0x54541f(0x106)]=function(){setTime();};

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".clock-settings .ast a");
const original = document.querySelector(".full-img");
const caption = document.querySelector("modal-caption");
previews.forEach(preview => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./${originalSrc}`
  });
});

modal.addEventListener("click", (e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
    original.classList.remove('open');

  }
});