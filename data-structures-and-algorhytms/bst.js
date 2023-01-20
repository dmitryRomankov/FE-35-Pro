class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNewNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNewNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNewNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }

  inOrderTraverse(node, cb) {
    if (node !== null) {
      this.inOrderTraverse(node?.left ?? null, cb);
      cb(node.data);
      this.inOrderTraverse(node?.right ?? null, cb);
    }
  }

  preOrderTraverse(node, cb) {
    if (node !== null) {
      cb(node.data);
      this.postOrderTraverse(node.left, cb);
      this.postOrderTraverse(node.right, cb);
    }
  }

  postOrderTraverse(node, cb) {
    if (node !== null) {
      this.postOrderTraverse(node.left);
      this.postOrderTraverse(node.right);
      cb(node.data);
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(11); // establishes root node
BST.insert(7);
BST.insert(9);
BST.insert(15);
BST.insert(6);
console.log(BST);

BST.inOrderTraverse(BST, (data) => console.log(data));
