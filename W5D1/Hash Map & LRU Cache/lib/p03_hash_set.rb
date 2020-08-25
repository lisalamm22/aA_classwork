class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    val = key.hash 
    @store[val % num_buckets] << key
    @count += 1
    resize! if count == num_buckets
  end

  def include?(key)
    
    @store.each {|bucket| bucket.each {|ele| return true if ele == key}}
    false
  end

  def remove(key)
    val = key.hash 
    if @store[val % num_buckets].include?(key)
      @store[val % num_buckets].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!
    duplicate = @store.dup.flatten
    new_val = @store.length*2
    @count = 0
    @store = Array.new(new_val) {Array.new}

    duplicate.each do |ele|
      self.insert(ele)

    end
  end
end
