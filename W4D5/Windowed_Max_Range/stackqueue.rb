class StackQueue
    def initialize
        @in_stack = MyStack.new
        @out_stack = MyStack.new
    end

    def size
        @in_stack.length + @out_stack.length
    end

    def empty?
        @in_stack.empty? && @out_stack.empty?
    end

    def enqueue(el)
        @in_stack.push(el)
    end

    def dequeue
        if @out_stack.empty?
            @in_stack.push(@out_stack.pop) until @out_stack.empty?
        else
            @out_stack.pop
        end
    end
end