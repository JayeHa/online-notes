{
   type NetworkErrorState = {
      result: 'fail';
      reason: 'offline' | 'down' | 'timeout';
   };

   type SuccessState = {
      result: 'success';
   };

   type ResultState = SuccessState | NetworkErrorState;
   class NetworkClient {
      tryConnect(): ResultState {
         return {
            result: 'fail',
            reason: 'offline'
         }
      }
   }
   
   class UserService{
      constructor(private client: NetworkClient) {}
   
      login(){
         this.client.tryConnect();
      }
   }
   
   class App{
      constructor(private userService: UserService){}
      run() {
         this.userService.login();

      };
   }
   
   const client = new NetworkClient();
   const service = new UserService(client);
   const app = new App(service);
   app.run();
}

// 언제 Error를 쓰고 언제 Error State를 써야할까?
// Error(Exception): 가급적 정말정말 예상하지 못한 곳에서 사용
// ErrorState: 조금 더 세부적인 에러를 결정하고 싶을 때(예상가능한 에러)

// ex. 네트워크 에러는 코드를 작성할 때 예상할 수 있는 state임
// 성공할 수도 있고 실패할 수도 있고, 실패한다면 어떤 실패인지 예상할 수 있음
// 따라서 tryConnect한 다음에 어떤 상태가 되는지 ResultState를 리턴하게 만드는 것이 더 좋음
