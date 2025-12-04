function TreeConstructor(strArr) {
    let childCount = {};  // Track how many times each node appears as a child
    let parentCount = {}; // Track how many children each parent has
    let allNodes = new Set();
    let childNodes = new Set();
    
    // Parse all pairs
    for (let pair of strArr) {
        // Extract numbers from string like "(1,2)"
        let nums = pair.match(/\d+/g);
        let child = nums[0];
        let parent = nums[1];
        
        allNodes.add(child);
        allNodes.add(parent);
        childNodes.add(child);
        
        // Count how many times this child appears
        childCount[child] = (childCount[child] || 0) + 1;
        
        // Count how many children this parent has
        parentCount[parent] = (parentCount[parent] || 0) + 1;
        
        // Rule 1: A child can only have ONE parent
        if (childCount[child] > 1) {
            return "false";
        }
        
        // Rule 2: A parent can have at most TWO children
        if (parentCount[parent] > 2) {
            return "false";
        }
    }
    
    // Rule 3: There should be exactly ONE root (node that's never a child)
    let rootCount = 0;
    for (let node of allNodes) {
        if (!childNodes.has(node)) {
            rootCount++;
        }
    }
    
    if (rootCount !== 1) {
        return "false";
    }
    
    return "true";
}

// keep this function call here
console.log(TreeConstructor(["(1,2)", "(2,4)", "(7,2)"]));
/*

## **How it works:**

1. **Parse each pair**: Extract child and parent from strings like "(1,2)"
2. **Check child rule**: Each child can appear only once (have only one parent)
3. **Check parent rule**: Each parent can have maximum 2 children
4. **Check root rule**: There must be exactly one root node

## **Example walkthrough:**

For `["(1,2)", "(2,4)", "(7,2)"]`:
- Node 1 is child of 2
- Node 2 is child of 4
- Node 7 is child of 2
*/



/*
SOLUTION 2
*/
function TreeConstructor(strArr) {
  let parents = {}; // To store the count of children for each parent
  let children = {}; // To store the parent of each child and check for duplicates

  for (let i = 0; i < strArr.length; i++) {
    // Extract child and parent IDs from the string (e.g., "(1,2)" -> ["1", "2"])
    let pair = strArr[i].replace(/[()]/g, "").split(",");
    let child = pair[0];
    let parent = pair[1];

// Check Rule 1: A child can only have one parent.
// If this child is already in the children map, it has more than one parent.
if (children[child]) {
  return false;
} else {
  children[child] = parent;
}

// Check Rule 2: A parent can only have at most two children.
// Use the parents map to count children.
if (parents[parent]) {
  parents[parent].push(child);
} else {
  parents[parent] = [child];
}
if (parents[parent].length > 2) {
  return false;
}
  }
  // The problem statement guarantees that all integers in the tree are unique.

  // If the loop completes without violating any rules, a valid binary tree can be formed.
  return true;
}

// Example usage:
// console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // Output: true