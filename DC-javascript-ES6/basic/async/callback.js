'use strict';

// 1. 동기와 비동기
// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
// console.log('1');
// setTimeout(() => console.log('2'), 1000); // 비동기
// console.log('3');

// 2. 콜백 마지막 정리 : 그럼 콜백은 항상 비동기일때만 쓸까요? NO
// 1) Synchronous callback   : 즉각
function printImmediately(print){
  print();
}
// printImmediately(() => console.log('hello'));

// 2) Asynchronous callback  : 예측x
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
// printWithDelay(() => console.log('async callback'), 2000); // 비동기

// 3. 콜백 지옥 체험 💩
// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError){
    setTimeout(()=>{
      if (user === 'ellie'){
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Heelo ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {console.log(error)}
);