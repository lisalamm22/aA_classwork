require 'singleton'
require 'byebug'


module Stepable
    def moves
        valid_moves = []
        self.move_diffs.each do |diff|
            new_pos = [@pos[0] + diff[0], @pos[1] + diff[1]]
            valid_moves << new_pos if @board.valid_move?(new_pos)
        end

        valid_moves.reject! { |move| @board[move].color == self.color }
    end

    private
    def move_diffs
    end
end

class Piece
    attr_reader :color, :board, :pos

    def initialize(color,board,pos)
        @color = color
        @board = board
        @pos = pos 
    end

    def moves

    end

end

class King < Piece
    include Stepable

    def symbol
        :K
    end

    def move_diffs
        diffs = [[0,1],[0,-1],[1,0],[-1,0],[1,1,],[-1,1],[-1,-1],[1,-1]]
    end
end


module Slideable
    HORIZONTAL_DIRS = [[0,1],[0,-1],[1,0],[-1,0]]
    DIAGONAL_DIRS = [[1,1],[1,-1],[-1,-1],[-1,1]]
   

    def horizontal_dirs 
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS 
    end

    def moves 
        valid_moves = []
        self.move_dirs.each do |dirs| #[[0,1],[0,-1],[1,0],[-1,0]]
            # grow_unblocked_moves_in_dir <-- dirs 
            valid_moves += grow_unblocked_moves_in_dir(dirs[0],dirs[1])
        end
        valid_moves
    end

    private
    def move_dirs 
        # horizontal_dirs or diagonal_dirs
    end

    def grow_unblocked_moves_in_dir(dx,dy) #<--- starting pos #0,1
        #valid_moves = [3,0]
        #valid_moves.each do |move|

        # cur_x, cur_y = pos
        # moves = []
        # loop do
        # cur_x, cur_y = cur_x + dx, cur_y + dy
        # pos = [cur_x, cur_y]

        # break unless board.valid_move?(pos)

        # if self.grid.empty?(pos)
        #     moves << pos
        # else
        #     # can take an opponent's piece
        #     moves << pos if self[pos].color != color

        #     # can't move past blocking piece
        #     break
        # end
        # end
        # moves

        unblocked_moves = []
        x,y = @pos    #current Rook position
        multiplier = 1
        unblocked = true
        new_pos = [x,y]
        while unblocked # && @board.valid_move?(new_pos)
            # debugger
            new_pos = [x+(dx*multiplier),y+(dy*multiplier)]
            break if !@board.valid_move?(new_pos)
            if @board[new_pos].color == self.color #running into our own piece
                unblocked = false 
            elsif @board[new_pos].color != self.color && !@board[new_pos].is_a?(NullPiece)#chomping enemy piece
                unblocked_moves << new_pos 
                unblocked = false
            elsif @board[new_pos].is_a?(NullPiece) #empty space
                unblocked_moves << new_pos 
            end
            multiplier += 1
        end
        unblocked_moves

        #[2,0] | [2,0]
        #[3,0] | [3,1]
        # x +=1 xy += 1 
    end #[[0,1],[0,2],[0,3]]
end



class NullPiece < Piece
    include Singleton

    attr_reader :color 
    
    def initialize
        @color = 'magenta'
    end

    def symbol
        :_
    end

    def moves
        
    end
end

class King < Piece
    include Stepable

    def symbol
        :K
    end

    def move_diffs
        diffs = [[0,1],[0,-1],[1,0],[-1,0],[1,1,],[-1,1],[-1,-1],[1,-1]]
    end
end

class Knight < Piece
    include Stepable

    def symbol
        :w
    end

    def move_diffs
        diffs = [[1,2],[1,-2],[2,1],[2,-1],[-1,2,],[-1,-2],[-2,1],[-2,-1]]
    end

end

class Queen < Piece
    include Slideable

    def symbol
        :W
    end

    def move_dirs
        self.horizontal_dirs
    end
end

class Rook < Piece
    include Slideable

    def symbol
        '♖'
    end

    def move_dirs
        self.horizontal_dirs
    end

end

# module Singleton
    
# end


