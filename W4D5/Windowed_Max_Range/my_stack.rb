class MyStack
  def initialize
    @store = []
  end

  def peek
    @store.first
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end
   
  def pop
    @store.shift
  end

  def push(el)
    @store.unshift(el)
  end

end