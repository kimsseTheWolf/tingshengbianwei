import{r as g,o as f,c as h,a as d,w as u,u as l,B as m,b as v,R as C,d as t,F as k,e as A,f as O,t as S,g as T,h as _,i as F,j as L,k as E,l as R,C as U,n as b}from"./index-CIou61yv.js";const G="/tingshengbianwei/video/failed1.mp4",J="/tingshengbianwei/video/failedFinal.mp4",j="/tingshengbianwei/assets/E-C2jz_P73.MP3",z="/tingshengbianwei/assets/N-CbOPvYdq.MP3",H="/tingshengbianwei/assets/NE-DzPYgB5-.MP3",q="/tingshengbianwei/assets/W-BWHSQpke.MP3",Q="/tingshengbianwei/assets/NW-DKhDfoGZ.MP3",Y="/tingshengbianwei/assets/S-BOo-f_py.MP3",K="/tingshengbianwei/assets/SE-BlLN36kc.MP3",Z="/tingshengbianwei/assets/SW-DQThdqvJ.MP3",X="/tingshengbianwei/assets/giveup-s06G-I4w.MP3",ee=t("col",{span:6},null,-1),te=t("col",{span:6},null,-1),ne=t("col",{span:6},null,-1),oe=t("col",{span:6},null,-1),ie=t("col",{span:6},null,-1),se=t("col",{span:6},null,-1),ae=t("col",{span:6},null,-1),le=t("col",{span:6},null,-1),de=t("col",{span:6},null,-1),ue=t("source",{src:j,type:"audio/mp3"},null,-1),re=[ue],ce=t("source",{src:z,type:"audio/mp3"},null,-1),pe=[ce],me=t("source",{src:H,type:"audio/mp3"},null,-1),ve=[me],_e=t("source",{src:q,type:"audio/mp3"},null,-1),fe=[_e],ge=t("source",{src:Q,type:"audio/mp3"},null,-1),he=[ge],we=t("source",{src:Y,type:"audio/mp3"},null,-1),ye=[we],Ce=t("source",{src:K,type:"audio/mp3"},null,-1),Ee=[Ce],be=t("source",{src:Z,type:"audio/mp3"},null,-1),Se=[be],$e=t("source",{src:X,type:"audio/mp3"},null,-1),De=[$e],Ne={__name:"DirectionButtons",emits:["directionSelected"],setup(w,{emit:r}){const c=g(""),s=g(!0),n=r;function a(p){s.value&&(c.value=p,s.value=!1,document.getElementById(p).play())}function i(){n("directionSelected",c.value),s.value=!0}return(p,e)=>(f(),h(k,null,[d(l(C),{gutter:[24,16]},{default:u(()=>[ee,d(l(m),{type:"primary",onClick:e[0]||(e[0]=o=>a("NW")),disabled:!s.value},{default:u(()=>[v("西北方")]),_:1},8,["disabled"]),te,d(l(m),{type:"primary",onClick:e[1]||(e[1]=o=>a("N")),disabled:!s.value},{default:u(()=>[v("北方")]),_:1},8,["disabled"]),ne,d(l(m),{type:"primary",onClick:e[2]||(e[2]=o=>a("NE")),disabled:!s.value},{default:u(()=>[v("东北方")]),_:1},8,["disabled"])]),_:1}),d(l(C),{gutter:[16,24]},{default:u(()=>[oe,d(l(m),{type:"primary",onClick:e[3]||(e[3]=o=>a("W")),disabled:!s.value},{default:u(()=>[v("西方")]),_:1},8,["disabled"]),ie,d(l(m),{type:"primary",danger:"",onClick:e[4]||(e[4]=o=>a("giveup")),disabled:!s.value},{default:u(()=>[v("听不清楚")]),_:1},8,["disabled"]),se,d(l(m),{type:"primary",onClick:e[5]||(e[5]=o=>a("E")),disabled:!s.value},{default:u(()=>[v("东方")]),_:1},8,["disabled"])]),_:1}),d(l(C),{gutter:[16,24]},{default:u(()=>[ae,d(l(m),{type:"primary",onClick:e[6]||(e[6]=o=>a("SW")),disabled:!s.value},{default:u(()=>[v("西南方")]),_:1},8,["disabled"]),le,d(l(m),{type:"primary",onClick:e[7]||(e[7]=o=>a("S")),disabled:!s.value},{default:u(()=>[v("南方")]),_:1},8,["disabled"]),de,d(l(m),{type:"primary",onClick:e[8]||(e[8]=o=>a("SE")),disabled:!s.value},{default:u(()=>[v("东南方")]),_:1},8,["disabled"])]),_:1}),t("audio",{id:"E",onEnded:e[9]||(e[9]=o=>i())},re,32),t("audio",{id:"N",onEnded:e[10]||(e[10]=o=>i())},pe,32),t("audio",{id:"NE",onEnded:e[11]||(e[11]=o=>i())},ve,32),t("audio",{id:"W",onEnded:e[12]||(e[12]=o=>i())},fe,32),t("audio",{id:"NW",onEnded:e[13]||(e[13]=o=>i())},he,32),t("audio",{id:"S",onEnded:e[14]||(e[14]=o=>i())},ye,32),t("audio",{id:"SE",onEnded:e[15]||(e[15]=o=>i())},Ee,32),t("audio",{id:"SW",onEnded:e[16]||(e[16]=o=>i())},Se,32),t("audio",{id:"giveup",onEnded:e[17]||(e[17]=o=>i())},De,32)],64))}},Pe={class:"timer-box"},ke={__name:"TImer",props:["time","needContinue"],emits:["timeIsUp"],setup(w,{emit:r}){const c=w,s=r,n=g(c.time);let a=null;function i(){clearInterval(a),c.needContinue&&n.value>0&&(a=setInterval(()=>{n.value-=1},1e3))}return A(()=>{i(),n.value<=0&&(s("timeIsUp"),clearInterval(a))}),O(()=>{clearInterval(a)}),(p,e)=>(f(),h("div",Pe," 倒计时："+S(n.value),1))}},We={class:"title"},Ve=t("div",null,"佩戴耳机效果更佳",-1),Ie=t("div",null,"铜钱落于何方",-1),xe=t("source",{src:G,type:"video/mp4"},null,-1),Me=[xe],Be=t("source",{src:J,type:"video/mp4"},null,-1),Ae=[Be],Fe={__name:"InGame",setup(w){let r=null,c=null,s=null,n=null;const a=T(),i=g({showDirectionButtons:!1,showWrongVideo:!1,showDeathVideo:!1,needCOntinueCountDown:!1}),p=g(JSON.parse(localStorage.getItem("gameConfig"))),e=["NW","N","NE","W","E","SW","S","SE"],o=g(e[0]);function W(){o.value=e[Math.floor(Math.random()*e.length)]}function V(){r=new(window.AudioContext||window.webkitAudioContet),c=new Audio("/audio/dropVoice.MP3"),s=r.createMediaElementSource(c),n=r.createPanner(),n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=1,n.maxDistance=1e4,s.connect(n),n.connect(r.destination),c.addEventListener("ended",D)}function I(){o.value==="NW"?n.setPosition(-1,1,0):o.value==="N"?n.setPosition(0,1,0):o.value==="NE"?n.setPosition(1,1,0):o.value==="W"?n.setPosition(-1,0,0):o.value==="E"?n.setPosition(1,0,0):o.value==="SW"?n.setPosition(-1,-1,0):o.value==="S"?n.setPosition(0,-1,0):o.value==="SE"&&n.setPosition(1,-1,0)}function x(){r||(r=new(window.AudioContext||window.webkitAudioContet),c=new Audio("/audio/dropVoice.MP3"),s=r.createMediaElementSource(c),n=r.createPanner(),n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=1,n.maxDistance=1e4,s.connect(n),n.connect(r.destination),c.addEventListener("ended",D)),c.play()}function $(y){console.log(y),i.value.needCOntinueCountDown=!1,i.value.showDirectionButtons=!1,y==o.value?(console.log("Correct!"),localStorage.setItem("gameConfig",JSON.stringify(p.value)),_.push("/ingame/"+(parseInt(a.params.roundNum)+1)).then(()=>{b(()=>_.go(0))})):(console.log("Wrong!"),p.value.maxLive<=1?i.value.showDeathVideo=!0:(i.value.showWrongVideo=!0,p.value.maxLive-=1,localStorage.setItem("gameConfig",JSON.stringify(p.value))))}function D(){}function N(){console.log("Video ended"),i.value.showDeathVideo?(i.value.showWrongVideo=!1,i.value.showDeathVideo=!1,_.push("/gameover").then(()=>{b(()=>_.go(0))})):(i.value.showWrongVideo=!1,i.value.showDeathVideo=!1,_.push("/ingame/"+(parseInt(a.params.roundNum)+1)).then(()=>{b(()=>_.go(0))}))}function M(){$("giveup")}function B(){p.value.maxLive<1?_.push("/gameover"):parseInt(a.params.roundNum)>p.value.maxRounds?_.push("/gameover"):(W(),V(),I(),x(),i.value.showDirectionButtons=!0,i.value.needCOntinueCountDown=!0)}return B(),(y,P)=>(f(),h(k,null,[d(ke,{time:p.value.timeLimits,"need-continue":i.value.needCOntinueCountDown,onTimeIsUp:P[0]||(P[0]=Oe=>M())},null,8,["time","need-continue"]),d(l(U),{theme:{algorithm:l(R).darkAlgorithm}},{default:u(()=>[d(l(F),{vertical:"",gap:"small",align:"center",justify:"center"},{default:u(()=>[t("div",We,"第"+S(l(a).params.roundNum)+"轮，共"+S(p.value.maxRounds)+"轮",1),Ve,Ie,i.value.showDirectionButtons?(f(),L(Ne,{key:0,onDirectionSelected:$})):E("",!0)]),_:1}),i.value.showWrongVideo?(f(),h("video",{key:0,class:"hoverVideo",id:"failed1",autoplay:"",onEnded:N},Me,32)):E("",!0),i.value.showDeathVideo?(f(),h("video",{key:1,class:"hoverVideo",id:"failedFinal",autoplay:"",onEnded:N},Ae,32)):E("",!0)]),_:1},8,["theme"])],64))}};export{Fe as default};