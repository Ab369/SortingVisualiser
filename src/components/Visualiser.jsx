import { useEffect,useState,useRef } from "react";
import mergeSort from "../SortingAlgortihms/MergeSort";

function Visualiser(){

    //array used for algo operations
    const [array,setArray]=useState([]);

    //this array used for visualisation
    const [tempArr,setTempArr]=useState([]);
    
    //this array used for storing animations
    const [animations,setAnimations]=useState([]);

    //this is for variable array length
    const [arrayLength,setArrayLength]=useState(50)

    //for sorting animation button--to start animation
    const [runSorting,setRunSorting]=useState(false)

    function generateRandomArray(){
        const randomArr1=[];
        const randomArr2=[];

        //empty temp and animations array
        setTempArr([]);
        setAnimations([]);

        for(let i=0;i<arrayLength;i++){
            let val=Math.floor(Math. random() * (1000 - 5) + 5)
            randomArr1.push(val);
            randomArr2.push([val,'green']);
        }

        //this will be used for sorting algo
        setArray(randomArr1);  

        //pushing colors for comparision animation
        setTempArr(randomArr2);     
     }
    
    useEffect(()=>{
        generateRandomArray();
    },[arrayLength])


    //for sorting
     useEffect(()=>{
    //    To correctly handle state, always create a copy of the state before modifying it and then use the setState function to update the state.
         if(runSorting)
         {
            let sortedByMs=[...array]
            let copyAnimations=[]
    
            mergeSort(sortedByMs,0,sortedByMs.length-1,copyAnimations);
            setAnimations(copyAnimations);
    
            console.log(sortedByMs);
            // console.log(animations);
            let sortedByJs=array.toSorted((a,b)=>a-b);
            console.log(sortedByJs)
    
            // In JavaScript, when you compare arrays (or objects) using == or ===, the comparison checks if the two variables reference the same object in memory, not whether their contents are identical. hence below comparision gives false
            // console.log(sortedByJs==sortedByMs)
         }
        
     },[runSorting])


     // Create a ref to track the animation index outside of state
    const animationIndexRef = useRef(0);

    useEffect(() => {
        if (animations.length > 0) {
            // Set up animation interval
            const animationInterval = setInterval(() => {
                if (animationIndexRef.current < animations.length) {

                    //swap animation
                    if(animations[animationIndexRef.current][2]=='swap')
                    {
                        let [changedValue, arrIndex] = animations[animationIndexRef.current];

                        // Functional state update to ensure we get the latest state of tempArr
                        setTempArr((prevArr) => {
                            let newArr = [...prevArr];
                            newArr[arrIndex] = [changedValue,'green'];
                            return newArr;
                        });
                    }

                    //compare animation
                    else
                    {
                       let [firstIndex,secondIndex]=animations[animationIndexRef.current];
                       
                       setTempArr((prevArr)=>{
                            let newArr=[...prevArr];

                            //add comparision index color=red
                            if(prevArr[firstIndex][1]=='green'){
                                newArr[firstIndex]=[prevArr[firstIndex],'red']
                                newArr[secondIndex]=[prevArr[secondIndex],'red']
                            }

                            //remove comparision index color
                            else
                            {
                                newArr[firstIndex]=[prevArr[firstIndex],'green']
                                newArr[secondIndex]=[prevArr[secondIndex],'green']
                            }
                            return newArr;
                       })
                    }

                    // Increment the animation index
                    animationIndexRef.current++;
                } 
                else 
                {
                    // Clear the interval once all animations are done
                    clearInterval(animationInterval);
                    animationIndexRef.current=0;
                }
            }, 50);  // Set delay between animations (increase for slower animations)
        }
    }, [animations]);  // Dependency on animations to start the animation

     
    //see difference in below and above run animations functions
    //below one not working

    //  // Run animation after animations array is populated
    // useEffect(() => {
    //     console.log(animations);
    //     if (animations.length > 0) {
    //         // Create a copy of the array and apply animations
    //         let animationIndex = 0;
    //         const animationInterval = setInterval(() => {
    //             if (animationIndex < animations.length) {
    //                 let [changedValue, arrIndex] = animations[animationIndex];
    //                 let newArr = [...tempArr];
    //                 newArr[arrIndex] = changedValue;
    //                 setTempArr(newArr);
    //                 animationIndex++;
    //             } else {
    //                 clearInterval(animationInterval);
    //             }
    //         }, 1);  // Delay between animations
    //     }
    // }, [animations]);

    //  useEffect(()=>{
    //   console.log('temparr'+tempArr)
    //  },[tempArr])



    return(
        <div className="flex flex-col gap-4">

            <div className="buttons font-semibold flex items-center gap-4">
                <button className="bg-yellow-300 text-black p-2 rounded-lg" onClick={()=>generateRandomArray()}>Generate New Array</button>

                <button className="bg-yellow-300 text-black p-2 rounded-lg" onClick={()=>{
                    setRunSorting(true)
                }}>Start Sorting</button>

                <div className="border-2 border-solid border-yellow-300 rounded-lg p-2">
                Set Array Size
                <input type="range"  min="5" max="200" onChange={(e)=>{
                    //range value by default is string
                    setArrayLength(Number(e.target.value))
                    setRunSorting(false);
                    console.log(e.target.value)
                    // generateRandomArray(); instead use state update in useEffect for consistent application
                }}></input>
                </div>
            </div>
         {
            <div className="grid grid-flow-col w-3/4 mx-auto items-end">
                    {tempArr.map((element)=>{
                        return(
                        <VisualiseArrayElement element={element}/>
                        )
                    })}
            </div>
         }
        </div>
    )
}

function VisualiseArrayElement({element}){
    if(element[1]=='green')
    {
        return(
            <div className='bg-[#20C20E] border-[1px] border-solid border-yellow-300' style={{height:`${element[0]/1.5}px`}}></div>
        )
    }

    else  //red for comparision
    {
        return(
            <div className='bg-red-500 border-[1px] border-solid border-yellow-300' style={{height:`${element[0]/1.5}px`}}></div>
        )
    }
    
}

export default Visualiser