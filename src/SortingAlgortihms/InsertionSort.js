
export default function InsertionSort(arr,animations)
{
    let n=arr.length;
    for(let i=1;i<n;i++)
    {
        let j=i;
        while(j>=0 && arr[j-1]>arr[j])
        {
            animations.push([j,j-1,'compare'])
            animations.push([j,j-1,'compare'])

            animations.push([arr[j],j-1,'swap'])
            animations.push([arr[j-1],j,'swap'])
            
            let temp=arr[j];
            arr[j]=arr[j-1];
            arr[j-1]=temp;
            j--;
        }
    }
}