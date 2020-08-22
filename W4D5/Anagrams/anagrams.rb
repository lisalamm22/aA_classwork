def first_anagram?(str1,str2)   #O(n!)
    str1_arr = str1.split('')
    anagrams_arr = str1_arr.permutation(str1.length).to_a
    anagrams = anagrams_arr.map {|ana| ana.join('')}
    anagrams.include?(str2)
end


# p first_anagram?('abc','bca')
# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

def second_anagram?(str1,str2)  #O(n*m)
    return false if str1.length != str2.length
    str1_arr = str1.split('')
    str2_arr = str2.split('')
    
    str1_arr.each do |char1|
        str2_arr.find_index(char1) ? str2_arr.delete(char1) : (return false)
    end

    str2_arr.empty? ? true : false
end

# p second_anagram?('abc','bca')
# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

def third_anagram?(str1,str2)   #O(nlogn)
    str1_a = str1.split('').sort
    str2_a = str2.split('').sort

    str1_a == str2_a 
end

# p third_anagram?('abc','bca')
# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

# def fourth_anagram?(str1,str2) #O(n)
#     str1_h = Hash.new(0)
#     str2_h = Hash.new(0)

#     str1.each_char {|char1| str1_h[char1] += 1}
#     str2.each_char {|char2| str2_h[char2] += 1}

#     str1_h == str2_h
# end

def fourth_anagram?(str1,str2)
    str_h = Hash.new(0)

    str1.each_char {|char1| str_h[char1] += 1}
    str2.each_char {|char2| str_h[char2] -= 1}

    str_h.each_value {|v| return false if v != 0}
    true
end

# p fourth_anagram?('abc','bca')
# p fourth_anagram?("gizmo", "sally")    #=> false
# p fourth_anagram?("elvis", "lives")    #=> true
