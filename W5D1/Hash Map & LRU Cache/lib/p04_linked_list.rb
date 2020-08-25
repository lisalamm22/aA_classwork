class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
  end

  def include?(key)
  end

  def append(key, val)
    new_node = Node.new(key, val)
    prev_node = @tail.prev
    @tail.prev = new_node
    prev_node.next = new_node
    new_node.prev = prev_node
    new_node.next = @tail
  end

  def update(key, val)
  end

  def remove(key)
  end

  def each
    final_arr = []
    current_node = @head.next

    while current_node != @tail
      puts "IM HERE #{current_node.val}"
      final_arr << current_node.val
      p final_arr
      current_node = current_node.next
    end

    return final_arr
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
