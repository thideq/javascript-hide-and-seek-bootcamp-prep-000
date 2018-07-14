function nestedTarget() {
  const li2 = document.querySelector('#nested .target');
return li2
}

function getFirstSelector(selector) {
  const lis = document.querySelector(selector);
  return lis;
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');  
  
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < lists[j].children.length; i++) {  
      lists[j].children[i].innerHTML = parseInt(lists[j].children[i].innerHTML) + n;
      console.log('list[' + j + '] children [' + i + '] is equal to ' + lists[j].children[i].innerHTML )
    }
  }  
}

function deepestChild() {
  const li3 = document.querySelector('#grand-node div div div div');
return li3;
}