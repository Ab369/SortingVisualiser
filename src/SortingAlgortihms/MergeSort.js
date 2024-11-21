function merge(arr,s,mid,e,animations){
    let newArr=[];
    let left=s,right=mid+1;

    while(left<=mid && right<=e){

        //push twice for changing colors
        animations.push([left,right,'compare']);
        animations.push([left,right,'compare']);

        if(arr[left]>arr[right]){
            newArr.push(arr[right]);
            animations.p
            right++;
        }
        else{
            newArr.push(arr[left]);
            left++;
        }
    }

    while(left<=mid)
    {
        newArr.push(arr[left]);
        left++;
    }

    while(right<=e)
    {
        newArr.push(arr[right]);
        right++;
    }

    // Copy sorted elements back to the original array
    for (let i = 0; i < newArr.length; i++) {
        let orgArrIndex=s+i;
        arr[orgArrIndex] = newArr[i];
        // animations.push([newArr[i],orgArrIndex]);  //use if showing only swaps not comparisions
        animations.push([newArr[i],orgArrIndex,'swap']);
    }
}

export default function mergeSort(arr,s,e,animations){
    if(s>=e)
    return

    let mid=Math.floor((s + e) / 2);

    mergeSort(arr,s,mid,animations);
    mergeSort(arr,mid+1,e,animations);
    merge(arr,s,mid,e,animations);
}