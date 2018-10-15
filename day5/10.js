setInterval(()=>{

    let refBlock = document.getElementById("id1");
    let parentBlock = document.getElementById("parentId");

    // CLOIN TO CREATE NEW BLOCK
    let newChild = refBlock.cloneNode(true);
    newChild.removeAttribute("id");

    let ref = new Date();
    let hours = ref.getHours();
    let minutes = ref.getMinutes();
    let seconds = ref.getSeconds();

    newChild.children[1].innerHTML = hours + ":" + minutes + ":" + seconds;
    

    // parentBlock.appendChild(newChild);
    parentBlock.insertBefore(newChild, parentBlock.firstChild);

}, 5000);