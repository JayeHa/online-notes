console.log('hi')
const menu = document.querySelector('.header__categories') as Element;
const modal = document.querySelector('.modal') as Element;

menu.addEventListener("click", (e) => {
   const target = e.target;
   if(target.classList.contains('category__midea')){
      modal.classList.add('active');  
   } else if(target.classList.contains('category__text')){

   }
});

modal.addEventListener("click", (e) => {
   const target = e.target;
   // console.log(target.className);
   if(target.className && target.classList.contains('modal-close') ){
      modal.classList.remove('active');
   }
   
});