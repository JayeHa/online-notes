// 💩
class UserOrderService {
  userDb;
  orderDb;
  paymentClient;
  processUserOrder(userId, orderId) {
    const user = userDb.select(/* db query */);
    if (!user) {
      throw Error("...");
    }
    const order = orderDb.select(/* db query */);
    if (!order) {
      throw Error("...");
    }
    paymentClient
      .connect(/* url */)
      .then(/* process payment */)
      .catch(/* retry */);
    this.orderDb.updateOrder(order, PAID);
  }
}
