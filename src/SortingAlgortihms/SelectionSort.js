
export default function SelectionSort(arr,animations){
  let n=arr.length;
  for(let i=0;i<n;i++)
  {
    for(let j=i+1;j<n;j++)
    {
        animations.push([i,j,'compare'])
        animations.push([i,j,'compare'])

        if(arr[i]>arr[j])
        {
            animations.push([arr[i],j,'swap'])
            animations.push([arr[j],i,'swap'])

            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
    }
  }
}