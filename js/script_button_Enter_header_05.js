
// При написании скрипта таким образим не нужна функция onclick="myFunction_header"()

// <button class="button-red" >Войти</button>

 


const buttonInFormAuthheader=document.querySelector('.regist_enter_link');

   console.log('buttonInFormAuthheader', buttonInFormAuthheader)

buttonInFormAuthheader.addEventListener('click', () => {      //click – происходит, когда кликнули на элемент левой кнопкой мыши
	
	console.log("Так с.. зашли в myFunction..")
	
       
        location.href="#zatemnenie_enter";
		document.body.style.overflow = "hidden"; //выключает скролл
        
})


const buttonInFormAuthheader_2=document.querySelector('.close');

   console.log('buttonInFormAuthheader_2', buttonInFormAuthheader_2)

buttonInFormAuthheader_2.addEventListener('click', () => {      //click – происходит, когда кликнули на элемент левой кнопкой мыши
	
	console.log("Так с.. зашли в myFunction..")
	
       document.body.style.overflow = "";  //     включает скролл
        
        
})



const buttonInFormAuthheader_3=document.querySelector('.button-red_header__');
 
    
   console.log('buttonInFormAuthheader_3', buttonInFormAuthheader_3)

buttonInFormAuthheader_3.addEventListener('click', () => {      //click – происходит, когда кликнули на элемент левой кнопкой мыши
	
	console.log("Так с.. зашли в myFunction..")
	
    
    const a1 = document.querySelector(".Sign-in_login_header");  //возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов.
    const b1 = document.querySelector(".Sign-in_password_header");
    console.log('a1', a1)
    console.log('b1', b1)
   	
	if (a1.value.length > 0 && b1.value.length> 0) {
		console.log('... зашли в if')
        window.open("https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById");
		location.href="#";
		
    }
    else {
		console.log('... зашли в else')
        location.href="#zatemnenie_enter_2";
        document.body.style.overflow = "hidden"; //выключает скролл
		//document.body.style.overflow = "";       включает скролл
    }
    
})


/*const el1 = document.getElementsByClassName ('tablinks_1')[0];
console.log("el1",el1)
const el2 = document.querySelector('#zatemnenie_enter');
console.log("el2",el2)
 
document.addEventListener( 'click', (e) => {
	
	const withinBoundaries = e.composedPath().includes(el1);
	if ( ! withinBoundaries ) {
		el2.style.display = "none"; // скрываем элемент т к клик был за его пределами
		
		
	}
	
	else{
		el2.style.display = "block"; 
	}
	
	
})*/
document.addEventListener( 'click', (e) => {
	
	if (e.composedPath()[0].attributes[0].nodeValue === "zatemnenie_enter"){
		
		location.href="#";
		document.body.style.overflow = "";      // включает скролл
	}
	
})

document.addEventListener( 'click', (e) => {
	if (e.composedPath()[0].attributes[0].nodeValue === "zatemnenie_enter_2"){
		
		location.href="#";
		document.body.style.overflow = "";      // включает скролл
	}
	
})








/*
/const el3 = document.getElementsByClassName ('button-red_header_1')[0];
console.log("el3",el3)
const el4 = document.getElementById('zatemnenie_enter_2');
console.log("el4",el4)
 /*
document.addEventListener( 'click', (e) => {
	
	const withinBoundaries = e.composedPath().includes(el3);
	if ( ! withinBoundaries ) {
		el4.style.display = "none"; // скрываем элемент т к клик был за его пределами
		
		
	}
	else{
		el4.style.display = "block"; 
	}
	
	
})*/


/*const el5 = document.getElementsByClassName ('Sign-in_block-enter')[0];
console.log("el3",el5)
const el6 = document.getElementById('zatemnenie_enter_3');
console.log("el4",el6)
 
/*document.addEventListener( 'click', (e) => {
	
	const withinBoundaries = e.composedPath().includes(el5);
	if ( ! withinBoundaries ) {
		el6.style.display = "none"; // скрываем элемент т к клик был за его пределами
		
		
	}
	else{
		el6.style.display = "block"; 
	}
	
	
})*/
