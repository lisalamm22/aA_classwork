#2d Array that takes in a piece of a NullPiece
require_relative 'piece.rb'

class Board

    attr_accessor :grid

    def initialize
        @grid = Array.new(8) {Array.new(8,nil)}
        white_rows = [0,1]
        black_rows = [6,7]
        white_rows.each { |row| @grid[row].map! { |el| 'w' }}
        black_rows.each { |row| @grid[row].map! { |el| 'b' }}
    end

    def [](pos)
        row,col = pos 
        @grid[row][col]
    end

    def []=(pos,val)
        row, col = pos
        @grid[row][col] = val
    end

    def valid_move?(pos)
        pos.nil?
    end

    #what if its occupied by an enemy? <--- 

    def move_piece(start_pos, end_pos)
        if !self[start_pos].nil?  #select a piece
            # if @grid[start_pos].valid_move?(end_pos)
                self[end_pos],self[start_pos] = self[start_pos],self[end_pos]
            # end
            
        else
            raise 'No piece here'
        end
    end

end

