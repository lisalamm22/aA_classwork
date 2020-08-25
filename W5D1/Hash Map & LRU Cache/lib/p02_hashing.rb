class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    product = 0
    self.each_with_index {|ele,idx| product += ele.to_i * idx }
    product 
  end
end

class String
  def hash
    alpha = ('a'..'z').to_a
    final_num = 0
    self.each_char.each_with_index {|char, idx| final_num += alpha.index(char.downcase) * idx }
    final_num
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    alpha = ('a'..'z').to_a
    final_num = 0

    self.each do |k, v|
      k_int = k.is_a?(Integer) ? k : alpha.index(k.to_s)
      v_int = v.is_a?(Integer) ? v : alpha.index(v.to_s)

     final_num += k_int * v_int
    end

    final_num
  end
end
