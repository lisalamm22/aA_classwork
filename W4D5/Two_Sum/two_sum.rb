def bad_two_sum?(arr, target_sum) #O(n^2)
    (0...arr.length).each do |idx1|
        (idx1+1...arr.length).each do |idx2|
            return true if arr[idx1] + arr[idx2] == target_sum
        end
    end
    false
end

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

def okay_two_sum?(arr, target_sum) #O(n^2)
    sorted = arr.sort 
    res = false
    arr.each_with_index do |el,idx|
        left = arr.take(idx)
        right = arr.drop(idx+1)
        diff = target_sum - el 
        diff > el ? res = bsearch(right,0,right.length-1,diff) : res = bsearch(left,0,left.length-1,diff)
        return true if res 
    end
    false
end

def bsearch(arr,start_idx,end_idx,target) #O(logn)
    return arr[start_idx] == target if start_idx == end_idx
    mid = (end_idx-start_idx)/2
    # debugger
    case arr[mid] <=> target
    when 1
        bsearch(arr,start_idx,mid-1,target)
    when 0
        return true 
    when -1
        bsearch(arr,mid+1,end_idx,target)
    end
end

# arr = [0, 1, 5, 7]
# p okay_two_sum?(arr, 6) # => should be true
# p okay_two_sum?(arr, 10) # => should be false

def two_sum?(arr,target_sum)    #O(n)
    hash = Hash.new#(false)

    arr.each do |el| 
        hash[el] = true
        return true if hash[target_sum-el] 
    # arr.each do |el| 
    #     if el*2 != target_sum
    #         return true if hash[(target_sum-el)] > 0 
    #     else 
    #         return true if hash[(target_sum-el)] > 1
    #     end
    end
    false
end

# arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false