let writeCards = (list, events) => {
  let myArr = [];
  for (let i = 0; i < list.length; i++) {
    myArr.push(`Thank you, ${list[i]}, for the wonderful ${events} gift!`);
  }
  return myArr;
};

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
