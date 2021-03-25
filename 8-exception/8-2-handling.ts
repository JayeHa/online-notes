{
class TimeoutError extends Error{}
class OfflineError extends Error{}

class NetworkClient {
   tryConnect(): void {
      throw new OfflineError('no network!');
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
      } catch(error){ //any타입..😭
         // show dialog to user
         if(error instanceof OfflineError){
            // TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 instanceOf를 사용할 수 없어요 😭
         }
      }
   };
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
}