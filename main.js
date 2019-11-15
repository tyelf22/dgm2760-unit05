const trees = ["oak", "Pine", "aspen", "Bald Cypress"]; //Created array of trees
const errorElement = document.querySelector("#error");
const displayResults = document.querySelector("#displayResults");


//Display the list of tree inside the displayResults
const listTrees = () => {
    let treeList = '';
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })

    displayResults.innerHTML = `${treeList} <span> ${trees.length} elements long</span>`;
}

listTrees();


//add redwood to end of array
document.querySelector("#addRedwood").addEventListener('click', () => {
    trees.push('Redwood');
    listTrees();
});

//add pear to the beginning of array
document.querySelector('#addPear').addEventListener('click', () => {
    trees.unshift('pear');
    listTrees();
})

document.querySelector('#lowerTrees').addEventListener('click', () => {
    toLowerCase = trees.toLocaleString().toLowerCase().split(',');
    trees.splice(0, trees.length);
    trees.push(...toLowerCase);
    listTrees();
})

document.querySelector('#remove_tree1').addEventListener('click', () => {
    if(trees.length > 0) {
        trees.shift();
        listTrees();
    } else {
        document.querySelector('#error').textContent = "No more items to remove";
    }

})

document.querySelector('#remove_tree2').addEventListener('click', () => {
    if(trees.length > 0) {
        trees.splice(1, 1);
        listTrees();
    } else {
        document.querySelector('#error').textContent = "No more items to remove";
    }

})

document.querySelector('#remove_treeLast').addEventListener('click', () => {
    if(trees.length > 0) {
        trees.pop();
        listTrees();
    } else {
        document.querySelector('#error').textContent = "No more items to remove";
    }

})

document.querySelector('#sortTrees').addEventListener('click', () => {
    trees.sort();
    listTrees();

})

document.querySelector('#showName3').addEventListener('click', () => {
    if(trees.length >= 3) {
        thirdTree = trees[2];
        errorElement.textContent = thirdTree;
    } else {
        errorElement.textContent = "There isn't a third tree"
    }

})

document.querySelector('#showName4').addEventListener('click', () => {
    if(trees.length >= 4) {
        fourthTree = trees[3];
        errorElement.textContent = fourthTree;
    } else {
        errorElement.textContent = "There isn't a fourth tree"
    }

})

