function partition( arr,low,high,animations) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j)
        {
            animations.push([i,j,'compare'])
            animations.push([i,j,'compare'])
            animations.push([arr[i],j,'swap'])
            animations.push([arr[j],i,'swap'])

            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp;
        }
    }
    // swap(arr[low], arr[j]);

    animations.push([low,j,'compare'])
    animations.push([low,j,'compare'])
    animations.push([arr[low],j,'swap'])
    animations.push([arr[j],low,'swap'])

    let temp=arr[low]
    arr[low]=arr[j]
    arr[j]=temp;
    return j;
}

function qs( arr, low, high,animations) {
    if (low < high) {
        let pIndex = partition(arr, low, high,animations);
        qs(arr, low, pIndex - 1,animations);
        qs(arr, pIndex + 1, high,animations);
    }
}

export default function QuickSort(arr,animations) {
    qs(arr, 0, arr.length - 1,animations);
}