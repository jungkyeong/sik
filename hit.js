const Que= document.querySelector(".qvalue");
const Answer= document.querySelector(".avalue");
const Qview=document.querySelector(".qview");


const gogo= (event)=>{
event.preventDefault();

// 입력 선언

const TASU= Que.querySelector(".tasu");
const SAGU= Que.querySelector(".sagu");
const HEEPLE= Que.querySelector(".heeple");
const ANTA= Que.querySelector(".anta");
const ERU= Que.querySelector(".eru");
const SAMRU= Que.querySelector(".samru");
const HOMERUN= Que.querySelector(".homerun");
const DANTA= parseInt(ANTA.value)- (parseInt(ERU.value)+parseInt(SAMRU.value)+parseInt(HOMERUN.value));         //에러뜨면 펄스인트 넣어보자


// 수식 작성

const TAULANS= parseInt(ANTA.value) / parseInt(TASU.value);


const CHULRUANS= (parseInt(ANTA.value) + parseInt(SAGU.value)) / 
( parseInt(SAGU.value)+parseInt(TASU.value)+parseInt(HEEPLE.value));

const GANGTAANS= (DANTA+2*parseInt(ERU.value)+3*parseInt(SAMRU.value)+4*(HOMERUN.value))/
parseInt(TASU.value);

const OPSANS= GANGTAANS+ CHULRUANS;


// 출력 선언

const TAUL= Answer.querySelector(".taul");
const CHULRU= Answer.querySelector(".chulru");
const GANGTA= Answer.querySelector(".gangta");
const OPS= Answer.querySelector(".ops");


// 출력 작성

TAUL.innerHTML= Number.parseFloat(TAULANS).toFixed(3); 
console.log(`타율은:${TAULANS}`);

CHULRU.innerHTML= Number.parseFloat(CHULRUANS).toFixed(3); 
console.log(`출루율은:${CHULRUANS}`);

GANGTA.innerHTML= Number.parseFloat(GANGTAANS).toFixed(3); 
console.log(`장타율은:${GANGTAANS}`);

OPS.innerHTML= Number.parseFloat(OPSANS).toFixed(3); 
console.log(`OPS는:${OPSANS}`);

Qview.style.display= "flex";

}

Que.addEventListener("submit",gogo);