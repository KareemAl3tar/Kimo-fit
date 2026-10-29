const D=[
["السبت Push","قوة الصدر والكتف والترايسبس — ثقيل نسبيًا",[["Barbell Bench Press","الصدر","4 × 4–6","Jeff+Nippard+bench+press+proper+form"],["Incline Dumbbell Press","أعلى الصدر","3 × 8–10","incline+dumbbell+press+proper+form"],["Seated Shoulder Press","الكتف","3 × 6–8","seated+shoulder+press+machine+proper+form"],["Cable Lateral Raise","الكتف الجانبي","3 × 12–15","cable+lateral+raise+proper+form"],["Rope Triceps Pushdown","الترايسبس","3 × 10–12","rope+triceps+pushdown+proper+form"]]],
["الأحد Pull","قوة الظهر والبايسبس والقبضة — ثقيل نسبيًا",[["Lat Pulldown","الظهر العريض","3 × 6–10","lat+pulldown+proper+form"],["Chest-Supported Row","منتصف الظهر","3 × 6–10","chest+supported+row+proper+form"],["Seated Cable Row","منتصف الظهر","2 × 10–12","seated+cable+row+proper+form"],["Hammer Curl","البايسبس والساعد","3 × 8–12","dumbbell+hammer+curl+proper+form"],["Farmer’s Carry","القبضة والجذع","3 × 20–30 م","farmer's+carry+proper+form"]]],
["الاثنين Legs","قوة الرجلين والخلفية والبطن",[["Hack Squat","الفخذ الأمامي","3 × 5–8","hack+squat+proper+form"],["Romanian Deadlift","الخلفية والمؤخرة","3 × 6–8","romanian+deadlift+proper+form"],["Seated Leg Curl","الفخذ الخلفي","3 × 10–12","seated+leg+curl+proper+form"],["Bulgarian Split Squat","الفخذ والمؤخرة","2 × 8 لكل رجل","bulgarian+split+squat+proper+form"],["Standing Calf Raise","السمانة","3 × 12–15","standing+calf+raise+proper+form"],["Dead Bug","البطن","2 × 8–10 لكل جانب","dead+bug+core+exercise+proper+form"]]],
["الثلاثاء لياقة","لياقة وبطن وقبضة بدون استنزاف",[["Stationary Bike أو مشي سريع","اللياقة القلبية","20–25 دقيقة","beginner+zone+2+cardio+stationary+bike"],["Plank","البطن والجذع","3 × 30–45 ث","forearm+plank+proper+form"],["Dead Hang","القبضة والكتف","2 × 15–25 ث","dead+hang+proper+form+grip+strength"],["Reverse Wrist Curl","الساعد","2 × 12–15","reverse+wrist+curl+proper+form"],["Pallof Press","ثبات الجذع","2 × 10–12 لكل جانب","pallof+press+proper+form"]]],
["الأربعاء Upper","زيادة حجم عضلات الجزء العلوي",[["Machine Chest Press","الصدر","3 × 8–12","machine+chest+press+proper+form"],["Neutral-Grip Lat Pulldown","الظهر","3 × 10–12","neutral+grip+lat+pulldown+proper+form"],["Reverse Pec Deck","الكتف الخلفي","2 × 12–15","reverse+pec+deck+proper+form"],["Dumbbell Lateral Raise","الكتف الجانبي","2 × 12–15","dumbbell+lateral+raise+proper+form"],["Incline Dumbbell Curl","البايسبس","2 × 10–12","incline+dumbbell+curl+proper+form"],["Cable Overhead Triceps Extension","الترايسبس","2 × 10–15","cable+overhead+triceps+extension+proper+form"]]]
];
const CFG={
  wa:"01061718705",
  photo:"images/karim.jpg",
  imgs:{
    "Barbell Bench Press":"images/bench-press.gif",
    "Incline Dumbbell Press":"images/incline-press.jpg",
    "Seated Shoulder Press":"images/shoulder-press.webp",
    "Cable Lateral Raise":"images/lateral-raise.webp",
    "Rope Triceps Pushdown":"images/triceps-pushdown.jpg",
    "Lat Pulldown":"images/lat-pulldown.gif",
    "Chest-Supported Row":"images/chest-supported-row.jpg",
    "Seated Cable Row":"images/seated-cable-row.webp",
    "Hammer Curl":"images/hammer-curl.jpeg",
    "Farmer’s Carry":"images/farmers-carry.webp",
    "Hack Squat":"images/hack-squat.webp",
    "Romanian Deadlift":"images/romanian-deadlift.webp",
    "Seated Leg Curl":"images/seated-leg-curl.png",
    "Bulgarian Split Squat":"images/bulgarian-split-squat.webp",
    "Standing Calf Raise":"images/standing-calf-raise.webp",
    "Dead Bug":"images/dead-bug.webp",
    "Stationary Bike أو مشي سريع":"images/stationary-bike.webp",
    "Plank":"images/plank.gif",
    "Dead Hang":"images/dead-hang.webp",
    "Reverse Wrist Curl":"images/reverse-wrist-curl.jpg",
    "Pallof Press":"images/pallof-press.jpg",
    "Machine Chest Press":"images/machine-chest-press.gif",
    "Neutral-Grip Lat Pulldown":"images/neutral-grip-lat-pulldown.webp",
    "Reverse Pec Deck":"images/reverse-pec-deck.jpg",
    "Dumbbell Lateral Raise":"images/dumbbell-lateral-raise.webp",
    "Incline Dumbbell Curl":"images/incline-dumbbell-curl.webp",
    "Cable Overhead Triceps Extension":"images/cable-overhead-triceps-extension.webp"
  }
};const th=n=>CFG.imgs[n]?`<img class="thumb" src="${CFG.imgs[n]}" alt="${n}">`:`<div class="thumb">صورة</div>`;
const $=id=>document.getElementById(id);
let S={w:[],a:{}};
try{S=JSON.parse(localStorage.getItem("karim-tracker")||"")||S}catch(e){}
if(!S.w)S.w=[];if(!S.a)S.a={};if(!S.x)S.x={};
let cur=0;
$("wk").innerHTML=[1,2,3,4,5,6,7,8].map(n=>`<option value="${n}">الأسبوع ${n}</option>`).join("");
const wk=()=>+$("wk").value;
const key=(i,n,w)=>i+"-"+n+"-"+w;
const inp=(i,n,f)=>{const v=(S.x[key(i,n,wk())]||{})[f];return `<input class="kg" data-i="${i}" data-n="${n}" data-f="${f}" ${f==="k"?'type="number" step="0.5" min="0" inputmode="decimal"':'type="text"'} value="${v==null?"":v}" aria-label="${f==="k"?"الوزن":"الأداء"}">`};
const best=(i,n)=>{let m=null;for(let w=1;w<=8;w++){const v=(S.x[key(i,n,w)]||{}).k;if(v!==""&&v!=null&&!isNaN(+v)&&(m===null||+v>m))m=+v}return m===null?"—":m+" كجم"};
const save=()=>{try{localStorage.setItem("karim-tracker",JSON.stringify(S))}catch(e){}};

function showDay(i){cur=i;
  [...$("tabs").children].forEach((t,j)=>t.classList.toggle("on",i===j));
  $("goal").textContent=D[i][1];
  $("ex").innerHTML=D[i][2].map((x,n)=>`<tr><td>${n+1}</td><td>${th(x[0])}</td><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td><td><a target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=${x[3]}">فيديو</a></td><td>${inp(i,n,"k")}</td><td>${inp(i,n,"r")}</td><td id="b${i}-${n}">${best(i,n)}</td></tr>`).join("");
}
D.forEach((d,i)=>{const b=document.createElement("button");b.className="tab";b.textContent=d[0];b.onclick=()=>showDay(i);$("tabs").appendChild(b)});
showDay(0);

function drawAtt(){
  let h="<tr><th></th>"+[1,2,3,4,5,6,7,8].map(n=>`<th>أ${n}</th>`).join("")+"</tr>";
  D.forEach((d,i)=>{h+=`<tr><th style="text-align:right;white-space:nowrap">${d[0]}</th>`;
    for(let w=0;w<8;w++){const k=i+"-"+w;h+=`<td><button class="cell${S.a[k]?" on":""}" data-k="${k}">${S.a[k]?"✓":""}</button></td>`}h+="</tr>"});
  $("att").innerHTML=h;
}
$("att").onclick=e=>{const k=e.target.dataset&&e.target.dataset.k;if(!k)return;S.a[k]=!S.a[k];save();render()};

function chart(){
  const p=[...S.w].sort((a,b)=>a.d<b.d?-1:1);
  if(!p.length){$("chart").innerHTML='<p class="mut">لا توجد قياسات بعد.</p>';return}
  const W=480,H=220,m=34,vs=p.map(x=>x.v),lo=Math.floor(Math.min(...vs)-1),hi=Math.ceil(Math.max(...vs)+1);
  const X=i=>p.length===1?W/2:m+i*(W-2*m)/(p.length-1),Y=v=>H-m-(v-lo)*(H-2*m)/(hi-lo||1);
  let s=`<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto" role="img" aria-label="تطور الوزن">`;
  for(let k=0;k<=4;k++){const v=lo+k*(hi-lo)/4,y=Y(v);s+=`<line x1="${m}" x2="${W-8}" y1="${y}" y2="${y}" stroke="var(--line)"/><text x="${m-6}" y="${y+4}" font-size="11" text-anchor="end" fill="var(--mut)">${v.toFixed(1)}</text>`}
  s+=`<polyline fill="none" stroke="var(--acc)" stroke-width="3" points="${p.map((x,i)=>X(i)+","+Y(x.v)).join(" ")}"/>`;
  p.forEach((x,i)=>{s+=`<circle cx="${X(i)}" cy="${Y(x.v)}" r="4.5" fill="var(--acc2)"/>`;
    if(p.length<=8||i%Math.ceil(p.length/8)===0)s+=`<text x="${X(i)}" y="${H-10}" font-size="10" text-anchor="middle" fill="var(--mut)">${x.d.slice(5).replace("-","/")}</text>`});
  $("chart").innerHTML=s+"</svg>";
}
function render(){
  const p=[...S.w].sort((a,b)=>a.d<b.d?-1:1),n=Object.values(S.a).filter(Boolean).length;
  $("k1").textContent=p.length?p[p.length-1].v.toFixed(1):"—";
  $("k2").textContent=p.length?((p[p.length-1].v-p[0].v>0?"+":"")+(p[p.length-1].v-p[0].v).toFixed(1)):"—";
  $("k3").textContent=Math.round(n/40*100)+"%";$("k4").textContent=n+" / 40";
  drawAtt();chart();
}
if(CFG.photo){$("photo").hidden=false;$("photo").style.backgroundImage=`url(${CFG.photo})`}
if(CFG.wa){$("wa").hidden=false;$("wa").href="https://wa.me/"+CFG.wa+"?text="+encodeURIComponent("أهلًا كريم، عايز أسأل عن البرنامج")}
$("wk").onchange=()=>showDay(cur);
$("ex").addEventListener("input",e=>{const t=e.target;if(!t.dataset||!t.dataset.f)return;const k=key(t.dataset.i,t.dataset.n,wk());S.x[k]=S.x[k]||{};S.x[k][t.dataset.f]=t.value;save();const b=$("b"+t.dataset.i+"-"+t.dataset.n);if(b)b.textContent=best(+t.dataset.i,+t.dataset.n)});
$("d").value=new Date().toISOString().slice(0,10);
$("save").onclick=()=>{const v=parseFloat($("w").value),d=$("d").value;
  if(!d||!(v>=30&&v<=250)){$("w").focus();return}
  S.w=S.w.filter(x=>x.d!==d);S.w.push({d,v});save();$("w").value="";render()};
$("undo").onclick=()=>{const p=[...S.w].sort((a,b)=>a.d<b.d?-1:1);if(p.length){S.w=S.w.filter(x=>x!==p[p.length-1]);save();render()}};
$("theme").onclick=()=>{const r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dark?"light":"dark"};
render();
