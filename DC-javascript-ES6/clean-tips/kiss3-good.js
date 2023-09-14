// ✨
class userService {
  userDb;
  getUser() {
    return this.userDb.select(/* db query */);
  }
}

class OrderService {
  orderDb;
  createOrder(user, product) {}
  getOrder(orderId) {
    return this.orderDb.select(/* db query */);
  }
  updateOrder(order) {
    this.orderDb.updateOrder(order, PAID);
  }
}

class PaymentsService {
  paymentClient;
  processPayment(orderRequest) {
    return this.paymentClient
      .connect(/* url */)
      .then(/* process payment */)
      .catch(/* retry */);
  }
}
