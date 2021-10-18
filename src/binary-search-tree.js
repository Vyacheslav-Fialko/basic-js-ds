const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
 module.exports = class BinarySearchTree {
   constructor() {
     this.tree = null;
   }

   root() {
     return this.tree;
   }

   add(data) {
     if (!this.tree) {
       this.tree = new Node(data);
     } else {
       let curTree = this.tree;
       while (curTree) {
         if (data < curTree.data) {
           if (curTree.left) {
             curTree = curTree.left;
           } else {
             curTree.left = new Node(data);
             return;
           }
         } else {
           if (curTree.right) {
             curTree = curTree.right;
           } else {
             curTree.right = new Node(data);
             return;
           }
         }
       }
     }
   }

   has(data) {
     let curTree = this.tree;
     while (curTree) {
       if (data === curTree.data) {
         return true;
       } else {
         curTree = data < curTree.data ? curTree.left : curTree.right;
       }
     }
     return false;
   }

   find(data) {
     let curTree = this.tree;
     while (curTree) {
       if (data === curTree.data) {
         return curTree;
       } else {
         curTree = data < curTree.data ? curTree.left : curTree.right;
       }
     }
     return null;
   }

   remove(data) {
     if (!this.has(data)) {
       return null;
     }

     if (this.tree.data === data) {
       this.tree = null;
       return;
     }

     function deleteNode(node, data) {
       if (node.left && node.left.data === data) {
         node.left = null;
         return node;
       } else if (node.right && node.right.data === data) {
         node.right = null;
         return node;
       } else if (node.left && node.left.data > data) {
         return deleteNode(node.left, data);
       } else if (node.right && node.right.data < data) {
         return deleteNode(node.right, data);
       } else {
         return node;
       }
     }
     deleteNode(this.tree, data);
   }

   min() {
     if (!this.tree) {
       return null;
     }
     let curTree = this.tree;
     while (curTree.left) {
       curTree = curTree.left;
     }
     return curTree.data;
   }

   max() {
     if (!this.tree) {
       return null;
     }
     let curTree = this.tree;
     while (curTree.right) {
       curTree = curTree.right;
     }
     return curTree.data;
   }
 };
