function differance(arr1, arr2) {
    let arr = [[...arr1.sort((a, b) => a -b)], [...arr2.sort((a, b) => a -b)]]
    let differance = 9999
    let nums = []

    for (first in arr[0]) {
        for (sec in arr[1]) {
            if (arr[0][first] - arr[1][sec] < differance && arr[0][first] - arr[1][sec] >= 0) {
                differance = arr[0][first] - arr[1][sec]
                nums = []
                nums.push(arr[0][first])
                nums.push(arr[1][sec])
            } else if (arr[1][sec] - arr[0][first] < differance && arr[1][sec] - arr[0][first] >= 0) {
                differance = arr[1][sec] - arr[0][first]
                nums = []
                nums.push(arr[1][sec])
                nums.push(arr[0][first])
            }
        }
    }


    console.log(differance)
    console.log(nums)
}

differance([10, 20, 14, 16, 18], [30, 23, 54, 33, 96])