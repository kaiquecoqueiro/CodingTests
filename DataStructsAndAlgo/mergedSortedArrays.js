function mergedSortedArrays(arr1, arr2){

    if(arr1.length === 0){
        return arr2
    }

    if(arr2.length === 0){
        return arr1
    }

    const mergedSorted = []
    let array1Item = arr1[0]
    let array2Item = arr2[0]
    let i = 0
    let j = 0

    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedSorted.push(array1Item)
            array1Item = arr1[i]
            i++
        } else {
            mergedSorted.push(array2Item)
            array2Item = arr2[j]
            j++
        }
    }

    return mergedSorted
}

console.log(mergedSortedArrays([0,2,3,4,31], [4,6,30]))