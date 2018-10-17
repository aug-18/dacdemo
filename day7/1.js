function postOnWall(){
    try{
        // 1
        let inpuRef = document.getElementById("inputId");
        let postValue = inpuRef.value;
        inpuRef.value = "";

        // 2
        let refBlock = document.getElementById("refBlock");

        // 3
        let newBlock = refBlock.cloneNode(true);
        newBlock.removeAttribute("id");

        // 4
        newBlock.children[1].children[0].children[0].innerHTML = postValue;


        // 5
        let parentRef = document.getElementById("parentRef");
        parentRef.insertBefore(newBlock, parentRef.firstChild);



    }catch(err){
        console.log(err);
    }
}