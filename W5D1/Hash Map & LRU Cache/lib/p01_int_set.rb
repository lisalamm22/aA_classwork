class MaxIntSet

attr_reader :store
  def initialize(max)
    @max = max
    @store = Array.new(max) { false }
  end

  def insert(num)
    raise 'Out of bounds' if num > @max || num < 0 
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num] 
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet

  attr_reader :store 

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    @store[num % @store.length] << num 
  end

  def remove(num)
    @store[num % store.length].delete(num)
  end

  def include?(num)
    @store.flatten.each {|ele| return true if ele == num}
    false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count, :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    @store[num % store.length].each { |ele| return false if ele == num}
    @store[num % store.length] << num
    @count += 1
    resize! if @count == @store.length
  end

  def remove(num)
    deleted = @store[num % store.length].delete(num)
    @count -= 1 if deleted
  end

  def include?(num)
   @store[num % store.length].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  require "Byebug"
  def resize!   
      duplicated = @store.dup.flatten

      @store = Array.new(@store.length * 2) { Array.new }
      @count = 0

      duplicated.each do |vals|
            insert(vals)
      end

  end
end

