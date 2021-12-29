// 💩
function deleteUser(id, softDelete = false) {
  if (softDelete) {
    // don't delete from db but only mark as deleted.
    return this._softDelete(id);
  }
  return db.removeById(id);
}

// 미래에 필요하지도 않을 그런 기능때문에 복잡성을 추가하는 것은 좋지 않음 => 필요한 기능만 초점을 두고 작성을 해나가야 함
// 그리고 더 이상 필요없어진 코드는 주석으로 남겨두기 보다는 버전관리 툴을 이용하자
