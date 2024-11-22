
export default function BubbleSort(arr,animations)
{
    let n=arr.length;
    for(let i=n-1;i>=0;i--)
    {
        let anySwapped=false;
        for(let j=0;j<i;j++)
        {
            animations.push([j,j+1,'compare'])
            animations.push([j,j+1,'compare'])

            if(arr[j]>arr[j+1])
            {
                // animations.push([arr[j],arr[j+1],'swap']) //this is not feasible as per our implementation of animation in jsx
                animations.push([arr[j],j+1,'swap'])
                animations.push([arr[j+1],j,'swap'])
                
                anySwapped=true;
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

            }
        }

        if(!anySwapped)
            break;
    }
}