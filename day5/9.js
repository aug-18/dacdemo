setInterval(()=>{

    let refBlock = document.getElementById("id1");
    let parentBlock = document.getElementById("parentId");

    // CLOIN TO CREATE NEW BLOCK
    let newChild = refBlock.cloneNode(true);

    parentBlock.appendChild(newChild);

}, 5000);