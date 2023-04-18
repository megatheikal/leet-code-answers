export function twoSum(nums: number[], target: number): number[] {
    const answer:number[] =[]
  
    for(let x = 0; x < nums.length -1 ; ++x){
        let tmp = 0
        for(let y=1; y < nums.length ; ++y){
            tmp = nums[x] + nums[y]
            if(tmp === target && x !==y){
                answer.push(x)
                answer.push(y)
                break;
            }
            continue;

        }
                    if(tmp === target) {
                break;
            }
    }
    return answer
};