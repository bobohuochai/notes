const marked = obj => {
  if (obj.left && obj.right) {
    obj.marked = obj.left.marked && obj.right.marked;
  }
  if (obj.left && !obj.right) {
    obj.marked = obj.left.marked;
  }
  if (!obj.left && obj.right) {
    obj.marked = obj.right.marked;
  }
  if (!obj.left && !obj.right) {
    obj.marked = obj.marked;
  }
  return obj.marked;
};
const dfsTree = obj => {
  let tar = "";
  if (!obj.marked) {
    tar = tar + `${obj.val}`;
  }
  if (obj.left && !marked(obj.left)) {
    tar += dfsTree(obj.left);
  }
  if (obj.right && !marked(obj.right)) {
    tar += dfsTree(obj.right);
  }
  if (!obj.left && !obj.right && !obj.marked) {
    tar = tar + ",";
    obj.marked = true;
    tar += dfsTree(root);
  }
  return tar;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: { val: 6, right: { val: 7, right: null, left: null }, left: null },
    right: null
  }
};

const arr = dfsTree(root).split(",");
arr.pop();

const result = arr.reduce((acc, cur) => {
  console.log(acc, cur);
  return Number(acc) + Number(cur);
}, 0);






