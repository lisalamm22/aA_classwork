class Array

    def my_uniq
        new_arr = []
        self.each do |ele|
            if !new_arr.include?(ele)
                new_arr.push(ele)
            end
        end
        new_arr
    end

    def two_sum
        arr = []
        self.each_with_index do |ele1,idx1|
            self.each_with_index do |ele2,idx2|
                if idx1 < idx2 && (ele1 + ele2 == 0)
                    arr << [idx1,idx2]
                end
            end
        end
        arr
    end

    def my_transpose 
      transposed = Array.new(self.length){Array.new(self.length)}
      (0...self.length).each do |idx1|
        (0...self.length).each do |idx2|
          transposed[idx1][idx2] = self[idx2][idx1]
        end
      end
      transposed
    end

    def stock_picker
      lowest = 0
      highest = 0
      max_dif = 0
      (0...self.length).each do |idx1|
        (idx1 + 1...self.length).each do |idx2|
          if self[idx2] - self[idx1] > max_dif
            lowest = idx1
            highest = idx2
            max_dif = self[idx2] - self[idx1]
          end
        end
      end
      return [lowest, highest]
    end


    def move(start_stack, end_stack)
      if start_stack < 3 && start_stack >= 0 && end_stack < 3 && end_stack >= 0
        if !self[start_stack].empty? 
          if self[end_stack].empty? || (!self[end_stack].empty? && self[end_stack][0] > self[start_stack][0])
          ele = self[start_stack].shift
            self[end_stack].unshift(ele)
          end
        else
          raise ArgumentError
        end
      else
        raise ArgumentError
      end
    end

    def won?
      if self[0].empty? #not starting stack
        if self[1].empty?
         return true
        elsif self[2].empty?
         return true
        end
      end
      return false
    end

    def tower_of_hanoi
        puts "type quit to end game"
        sleep(3)
        until self.won?
            system("clear")
            p self
            puts "enter number 0..2, and another 0..2"
            begin
                positions = gets.chomp.split.map(&:to_i)
                self.move(positions[0],positions[1])
                p self
            rescue ArgumentError
                puts "Try again"
                sleep(2)
                retry 
            end
        end
        puts "Congrats, you've moved the tower!"
    end


end

towers = [[1, 2, 3, 4, 5 ,6 , 7],[],[]] 
towers.tower_of_hanoi