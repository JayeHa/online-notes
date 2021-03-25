class NetworkClient {
   tryConnect(): void {
      throw new Error('no network!');
   }
}

class UserService{
   constructor(private client: NetworkClient) {}

   login(){
      this.client.tryConnect();
      // 에러가 발생했을 때 내가 정확하고 우아하게 처리할 수 있는 것이 아니라면 catch를 하지 않는 것이 더 낫다
      // 그래서 여기서 어정쩡하게 잡기보다는 이것을 처리할 수 있는 곳에서 try하는 것이 더 좋음
   }
}

class App{
   constructor(private userService: UserService){}
   run() {
      try{
         this.userService.login();
      } catch(error){
         // show dialog to user
         console.log('네트워크가 없어. 너의 네트워크를 한 번 확인하고 다시 시도해봐');  
      }
   };
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();

// ❗ 메인포인트
// 예상하지 못한 에러가 발생하는 것이 있다면 내가 이것을 try catch handling할 때
// 내가 여기서 처리하는 것이 과연 의미있는 처리를 할 수 있을까라고 생각해보시고요
// 가능한 가장 우아하게 처리할 수 있는 곳에서 catch를 하는 것이 중요합니다.