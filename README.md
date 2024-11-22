# Sorting Visualizer 🧮

A web application built with **React.js** that visualizes various sorting algorithms. This project helps users understand how different sorting techniques work by providing interactive and visual representations of the algorithms in action.



## Table of Contents 📚

- [Sorting Visualizer 🧮](#sorting-visualizer-)
  - [Table of Contents 📚](#table-of-contents-)
  - [Features 🚀](#features-)
  - [Demo 🎥](#demo-)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [My Process](#my-process)
  - [Learnings](#learnings)
  - [Conclusion](#conclusion)

## Features 🚀

- **Interactive Visualizations**: Step-by-step animations of sorting algorithms.
- **Customizable Inputs**: Generate Random Array,Choose array size and speed of animations.
- **Algorithm Options**: Includes popular algorithms like:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  

## Demo 🎥

[Live Demo Link](https://sorting-visualiser-henna.vercel.app/)


## Technologies Used
ReactJS,javascript

## Project Structure

- **src**
   - **components**
      - Visualiser.jsx (main jsx file)
      - v2.jsx is unused(here for learning purpose)
   -  **Sorting Algorithms**
       - contains sorting algorithms code in Javascript
  
  ## My Process

  - Firstly I wrote all sorting algorithms in seperate js files and imported them to visualiser.jsx
  - In sorting algorithms,populated animations array with indexes for comparision and value,index pair for updating array values
  - Created state variables needed for different functionalities
  - Created function for generating random array of given length
  - used two arrays- one for sending to algortihm and getting it sorted with populating animations array, other for all UI rendering purposes
  - the values in second array are same as first, only difference it also contains color of each bar 
  - Once animations array is populated, used it to show animations based on its value being **swap** or **compare** and changing colors and values of array elements accordingly
  - adjusted speed of animation using setInterval
  - used **range** and **select** HTML tags to customise array, animations and sorting algos
  - dynamically set height of bars based on array values-*{height:`${element[0]/1.5}px`}*

  ## Learnings
  - learnt working of sorting algorithms in depth and also their implementation in Javascript
  - Gained more understanding of react state and control flow
  - Modifying state variables other than **setState** results in inconsistencies and errors hence To correctly handle state,created a copy of the state before modifying it and then used the setState function to update the state variable after modifications
  - In JavaScript, when you compare arrays (or objects) using == or ===, the comparison checks if the two variables reference the same object in memory, not whether their contents are identical. hence below comparision gives false *console.log(sortedByJs==sortedByAlgo)* even when both arrays are equal
  - Default JS **sort**/**toSorted** function needs a comparision function as parameter otherwise it will always sort assuming elements are string.
  ```
  let sortedByJs=array.toSorted((a,b)=>a-b);
  ```
  - use refernce variable to calculate index of animations variable, using non-state variable results in state inconsistencies and wrong result
  ```
  const animationIndexRef = useRef(0);
  ```
  - In setInterval,functional state update used to ensure we get the latest state of visArr otw there will be wrong results 
  ```
   setVisArr((prevArr) => {
                            let newArr = [...prevArr];
                            newArr[arrIndex] = [changedValue,'green'];
                            return newArr;
                        });
    ```
  - input **range** value is in  **string** ,need to be converted in required data type before using
  
  ## Conclusion
  This Sorting Visualizer is a powerful educational tool for understanding sorting algorithms through interactive and engaging animations. It combines React's capabilities with algorithmic logic to provide an intuitive learning experience. 