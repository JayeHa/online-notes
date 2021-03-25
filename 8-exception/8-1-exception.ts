// Java: Exception
// JavaScript: Error
// const array = new Array(10000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string{
  if(fileName === 'not exist!💩') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents📃';
}

function closeFile(fileName: string) {
  //
}

function run(){
  const fileName = 'not exist!💩';
  
  try {   //try안에는 지저분하게 코드를 많이 쓰는것 보다는 정말 에러가 발생하는 그 부부만 try로 감싸서 catch를 하고 finally하는 것이 더 좋습니다.
    console.log(readFile(fileName));
  } catch(error) {
    console.log(`catched!!`);
    return;
  } finally{   // finally안에 있는 코드는 에러가 발생하고 catch가 되어도 항상 실행된다는 것을 보장함
    closeFile(fileName);
    console.log(`closed!`);
  }


}

run();
