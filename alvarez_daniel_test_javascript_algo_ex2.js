//array of 9 bools to check the presence of each number from 1 to 9
let checkerArray = new Array(9);
//F21 function
//Checks if the array sequence doesn't have a repeated number
function CorrectSequence(A){
    resetCheckerArray();
    //returns !some, "some" iterates through the array elements and marks them on the checker array
    //if it finds an element that has been checked already if stops and returns true (which is inverted on the funtion return)
    return !A.some(element =>{
        //checks if this element was already marked
        if(checkerArray[element-1] === false){
            //if not, it marks it and goes on
            checkerArray[element-1] = true;
            return false;
        }
        //if it was already marked it stops
        else return true;
    })
}
//Resets the checker array
function resetCheckerArray(){
    for(let i =0; i < 9; i++){
        checkerArray[i]=false;
    }
}