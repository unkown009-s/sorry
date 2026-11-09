const apologies = [
"Sorry, Jaivi 💜","I'm genuinely sorry.","Really, really sorry.","My bad. I'm sorry.","I owe you an apology.",
"Sorry for upsetting you.","Sorry if I hurt your feelings.","I wish I had handled things better.","I didn't mean to upset you.","Please know I regret it.",
"Sorry from the bottom of my heart.","One sincere sorry.","A thousand apologies.","Sorry for my mistake.","I should have thought before acting.",
"Sorry for not understanding.","I could have done better.","Please accept my apology.","I'm sorry, genuinely.","Sorry for the unnecessary drama.",
"I regret what I did.","Sorry for making things awkward.","I didn't handle that well.","That was my mistake.","I should have listened better.",
"Sorry for being careless.","I wish I could take that moment back.","Sorry for disappointing you.","I'll try to do better.","Sorry for the misunderstanding.",
"No excuses, just sorry.","Sorry, my friend.","I value our friendship.","I never wanted to upset you.","Sorry for my words.",
"Sorry for my actions.","I should have been more thoughtful.","Please don't mistake my silence.","I'm learning from this.","Sorry for not thinking it through.",
"That wasn't fair to you.","I could have handled it differently.","Sorry for the trouble.","I hope you understand my apology.","I'm not proud of my mistake.",
"Sorry for making you feel bad.","I should have been more careful.","Sorry for crossing the line.","I respect your feelings.","Please know I mean this.",
"Sorry times infinity.","One more genuine sorry.","I really messed that up.","Sorry for the hurt I caused.","I should have known better.",
"Sorry for not being considerate.","I never wanted things to go this way.","I wish I had chosen better words.","Sorry for the confusion.","You're allowed to be upset.",
"I understand if you need time.","Sorry for being thoughtless.","I'll take responsibility.","I won't pretend it didn't happen.","I want to make things right.",
"Sorry for the bad moment.","I should have been kinder.","Sorry, no excuses.","I'll learn from this.","I hope we can talk when you're ready.",
"Sorry for my part in this.","I genuinely care about our friendship.","I should have respected your feelings.","Sorry for making you uncomfortable.","I didn't mean for this to happen.",
"I know sorry is only a start.","I want my actions to speak too.","Sorry for the way I handled things.","I could have communicated better.","Sorry for not getting it right.",
"I hope time helps.","Please know this is sincere.","Sorry, Jaivi. Really.","I wish I had done things differently.","Your feelings matter.",
"I should have been more mature.","Sorry for the unnecessary stress.","I take responsibility for my mistake.","I won't dismiss how you feel.","Sorry for letting you down.",
"I hope I can do better next time.","Thank you for hearing me out.","Sorry for everything I got wrong.","I don't expect instant forgiveness.","I just wanted to say I'm sorry.",
"Friendship deserves honesty.","I'll try to show you I'm sorry.","One hundred apologies. One sincere meaning.","100 times sorry, Jaivi. 💜"
];
let revealed=0;
function updateProgress(){
 document.getElementById("counter").textContent=revealed+" / 100 APOLOGIES REVEALED";
 document.getElementById("bar").style.width=revealed+"%";
}
function addCard(i){
 const card=document.createElement("div");
 card.className="sorry-card style"+((i%8)+1);
 const num=document.createElement("div");num.className="number";
 num.textContent="APOLOGY "+String(i+1).padStart(3,"0");
 const word=document.createElement("div");word.className="words";word.textContent=apologies[i];
 card.append(num,word);document.getElementById("grid").appendChild(card);
}
function enter(){document.getElementById("welcome").style.display="none";document.getElementById("main").style.display="block";window.scrollTo(0,0);revealNext();}
function revealNext(){if(revealed>=100)return;addCard(revealed);revealed++;updateProgress();document.getElementById("grid").lastElementChild.scrollIntoView({behavior:"smooth",block:"nearest"});}
function showAll(){while(revealed<100){addCard(revealed);revealed++;}updateProgress();}
function showLetter(){showAll();const letter=document.getElementById("letter");letter.style.display="block";letter.scrollIntoView({behavior:"smooth"});}
const particles=document.getElementById("particles"),symbols=["✦","♡","✧","♥","⋆"];
for(let i=0;i<35;i++){const p=document.createElement("div");p.className="particle";p.textContent=symbols[i%symbols.length];p.style.left=Math.random()*100+"%";p.style.animationDuration=(8+Math.random()*12)+"s";p.style.animationDelay=(-Math.random()*15)+"s";p.style.fontSize=(12+Math.random()*20)+"px";particles.appendChild(p);}
