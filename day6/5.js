
function postOnYourWall(){
    try{
        console.log("POST LOGIG WILL BE DONE HERE...");

        // READ THE INPUT
        let inputRef = document.getElementById("inputId");
        let postValue = inputRef.value; // ITS PROPERTY NOT METHOD.
        console.log(postValue);

        // CLEAR THE INPUT BOX
        inputRef.value = "";

        // 3. GET THE REF BOX.
        let refBoxBlock = document.getElementById("refBoxId");

        // 4. Create clone
        let newBlock = refBoxBlock.cloneNode(true);

        // 5 
        newBlock.removeAttribute("id");

        // 6
        newBlock.children[1].innerHTML = postValue;

        // 7 
        let parentRef = document.getElementById("parentId");
        parentRef.insertBefore(newBlock, parentRef.firstChild);

    }catch(err){
        console.log(err);
    }
}