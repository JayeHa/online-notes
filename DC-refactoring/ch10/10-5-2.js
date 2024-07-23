class Hotel {
  constructor() {
    this.room = [];
  }

  addRoom(roomNumber) {
    this.room[roomNumber] = new Room(roomNumber);
  }

  emptyRoom(roomNumber) {
    this.room[roomNumber] = new EmptyRoom(roomNumber);
  }

  cleanRooms() {
    this.room.forEach((room) => room.clean());
  }
}

class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
  }

  clean() {
    console.log(`${this.roomNumber}번 방을 청소합니다 🧹 💨💨`);
  }
}

class EmptyRoom extends Room {
  clean() {
    console.log(`${this.roomNumber}번 방이 비어있어요~~`);
  }
}

const hotel = new Hotel();
hotel.addRoom(1);
hotel.addRoom(2);
hotel.addRoom(3);
hotel.emptyRoom(2);
hotel.cleanRooms();
