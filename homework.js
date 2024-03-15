class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//params: { nodeNumber: number; treeStructure: string[] }
function makeTree(nodeNumber, treeStructure) {
  const nodesMap = new Map();
  let root;

  for (let i = 0; i < nodeNumber; i++) {
    const [nodeId, value, leftChildId, rightChildId] =
      treeStructure[i].split(' ');

    const newNode = new TreeNode(value);

    if (nodeId === '1') {
      root = newNode;
    }

    nodesMap.set(nodeId, {
      node: newNode,
      leftChildId,
      rightChildId,
    });
  }

  const mapIterator = nodesMap.keys();

  for (let i = 0; i < nodeNumber; i++) {
    const key = mapIterator.next().value;

    const currentNode = nodesMap.get(key);

    currentNode.node.left =
      currentNode.leftChildId !== 'null'
        ? nodesMap.get(currentNode.leftChildId).node
        : null;

    currentNode.node.right =
      currentNode.rightChildId !== 'null'
        ? nodesMap.get(currentNode.rightChildId).node
        : null;
  }

  return root;
}

const testTree1 = makeTree(7, [
  '1 1 2 3',
  '2 2 5 6',
  '3 3 null 4',
  '4 4 7 null',
  '5 5 null null',
  '6 6 null null',
  '7 7 null null',
]);

const testTree2 = makeTree(11, [
  '1 1 2 5',
  '2 2 3 4',
  '3 3 null null',
  '4 4 null null',
  '5 5 6 9',
  '6 6 7 8',
  '7 7 null null',
  '8 8 null null',
  '9 9 10 11',
  '10 10 null null',
  '11 11 null null',
]);

const testTree3 = makeTree(7, [
  '1 1 2 7',
  '2 2 3 6',
  '3 3 4 null',
  '4 4 null 5',
  '5 5 null null',
  '6 6 null null',
  '7 7 null null',
]);

// your task below

// Напиши алгоритмы обходов в глубину и ширину,
// которые принимают на вход корень дерева
// Каждый из них должен вывести в консоль последовательность обрабатываемых узлов

const DFS = (root) => {};

// DFS(testTree1); // 1 2 5 6 3 4 7
// DFS(testTree2); // 1 2 3 4 5 6 7 8 9 10 11
// DFS(testTree3); // 1 2 3 4 5 6 7

const BFS = (root) => {};

// BFS(testTree1); // 1 2 3 5 6 4 7
// BFS(testTree2); // 1 2 5 3 4 6 9 7 8 10 11
// BFS(testTree3); // 1 2 7 3 6 4 5
