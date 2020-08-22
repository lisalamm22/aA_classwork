def my_min_I(list)    # O(n^2)
    list.each do |el1|
        return el1 if list.all? { |el2| el1 <= el2 }
    end
end

def my_min_II(list) #O(n)
    list.inject {|min,el| el < min ? el : min}
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min_I(list)  # =>  -5
p my_min_II(list)  # =>  -5

def largest_contiguous_subsum_I(list) #O(n^2)
    max_subarr = []
    (0...list.length).each do |idx1|
        (idx1 + 1...list.length).each do |idx2|
            subarr = list[idx1..idx2]
            max_subarr = subarr if subarr.sum > max_subarr.sum
        end
    end
    max_subarr.sum
end

def largest_contiguous_subsum_II(list)
    largest_sum = list[0]
    current_sum = list[0]
    diff = 0
    (1...list.length).each do |idx|
        current_sum += list[idx]
        diff += list[idx] 
        largest_sum = [largest_sum,current_sum,diff,list[idx]].max 
        if largest_sum == list[idx]
            current_sum = list[idx]
            diff = 0
        end
    end
    largest_sum
end

list = [5, 3, -7]
p largest_contiguous_subsum_I(list) # => 8
p largest_contiguous_subsum_II(list) # => 8

list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum_II(list)

list = [-5, -1, -3]
p largest_contiguous_subsum_II(list)

# # possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7