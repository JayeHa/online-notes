document.addEventListener('mousemove', (event)=>{
  const horizontal = document.querySelector('.horizontal');
  const verticality = document.querySelector('.verticality');
  const target = document.querySelector('.target');
  const tag = document.querySelector('.tag');
  let x = event.clientX;
  let y = event.clientY;


  horizontal.style.top = `${y}px`;
  verticality.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.innerHTML = `${x}, ${y}`
})