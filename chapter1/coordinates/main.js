const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x} ${y}`);

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}px, ${y}px`;
});

/* 내가 한 부분 (querySelector를 이벤트리스너 밖에서 했어야 해)
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
*/