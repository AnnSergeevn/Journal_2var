
 let a1 = document.querySelector('.Sign-in_login');
 let b1 = document.querySelector('.Sign-in_password');
 let btn = document.querySelector('.button-red');
 btn.setAttribute('disabled', true);
 console.log('b1', b1)
 console.log('a1', a1)
 console.log('btn', btn)

function toggleButton(){	 
if (a1.value.length > 0 && b1.value.length> 0) {
   btn.setAttribute('disabled', true);
	 
   window.open("https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById");
	   btn.removeAttribute('disabled');// удаляется состояние disabled 
   console.log('... зашли в if')
   
}else{
	console.log('... зашли в else')
    btn.removeAttribute('disabled');// удаляется состояние disabled
}
}

const main=document.querySelector ('main');    // во всем документе ищем main и все что в него входит
const rightBar=main.querySelector ('.right-bar');  // в main  ищем class right-bar и все что в нем
const singIn=rightBar.querySelector ('.Sign-in');
const buttonInFormAuth=singIn.querySelector('.button-red');

buttonInFormAuth.addEventListener('click', () => {      //click – происходит, когда кликнули на элемент левой кнопкой мыши
	
	
	if (a1.value.length > 0 && b1.value.length> 0) {
		console.log('... зашли в if')
        window.open("https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById");
    }
   
})