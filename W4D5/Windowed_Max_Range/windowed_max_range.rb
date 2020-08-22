def windowed_max_range_I(array,window_size)
    current_max_range = 0 
    (0...array.length - window_size + 1).each do |win_strt_idx|
        window = array[win_strt_idx...win_strt_idx+window_size]
        # p window
        this_max_range = window.max - window.min 
        current_max_range = this_max_range if this_max_range > current_max_range
    end
    current_max_range
end

p windowed_max_range_I([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range_I([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range_I([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range_I([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8



