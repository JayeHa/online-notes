// Promise -> Async/await

// ❌ Bad Code 💩
function displayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// ✅ Good Code ✨
// 두 가지 이상의 연속된 프로미스를 사용해야한다면 async과 await를 사용하자
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
