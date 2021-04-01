"use strict";
console.log('hello!');

// 📌 파일이 변경될 때마다 JS로 변환해주는 명령어
// 👉 tsc logging.ts -w
//  ==> logging.js파일 생성

//  BUT 많은 TS파일이 있을 때는? 
// 📌 여러가지를 동시에 실행하고 더 다양한 옵션을 주기 위한 명령어
// 👉 tsc --init
// ==> tsconfig.json파일 생성

// 📌 tsconfig생성 후 tsconfig가 있는 프로젝트폴더 안에서 모든 TS를 JS로 변환하는 명령어
// 👉 tsc -w

// ==> 파일을 수정할 때마다 계속 업데이트 되어서 컴파일링이 됨