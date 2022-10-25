function Find2ndLargest(){
    Find2ndLargest.prototype.find = function(arr){
        if (arr === null || arr === "" || arr.length < 2) return arr;

        let first = -1 , second = -1;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    return second;
    }
    
}

module.exports = Find2ndLargest