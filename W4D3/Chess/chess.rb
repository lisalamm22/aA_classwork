#2d Array that takes in a piece of a NullPiece
require_relative 'piece.rb'
require 'singleton'

class Board

    attr_accessor :grid

    def initialize
        @grid = Array.new(8) {Array.new(8,nil)}
        white_rows = [0,1]
        black_rows = [6,7]
        # white_rows.each { |row| @grid[row].map! { |el| :w }} #Piece.new
        # black_rows.each { |row| @grid[row].map! { |el| :b }} #Piece.new
        # @grid[[0,0]] = King.new('red',self,[0,0])
        
    end
    
    
    
    def [](pos)
        row,col = pos 
        @grid[row][col]
    end
    
    def []=(pos,val)
        row, col = pos
        @grid[row][col] = val
    end
    
    def populate 
        (0...grid.length).each do |x|
            (0...grid.length).each do |y|
                pos = [x,y]
                if x < 1
                    self[pos] = Rook.new('red',self,pos)
                else
                    self[pos] = NullPiece.instance
                end
            end
        end
    end

    def render 
        display_board = []
        grid.each {|row| display_board << row.dup}
        (0...display_board.length).each do |x|
            (0...display_board.length).each do |y|
                pos = [x,y]
                display_board[x][y] = self[pos].symbol 
            end
        end
        display_board
    end

    def valid_move?(pos)
        x,y = pos
        if 0 <= x && x <= 7 && 0 <= y && y <= 7
            true #self[pos].nil?   
        else
            false
        end
    end

    #what if its occupied by an enemy? <--- 
    #move_piece should account for the possible moves of an individual piece

    def move_piece(start_pos, end_pos)
        if !self[start_pos].nil?  #select a piece
            if self.valid_move?(end_pos) 
                self[end_pos],self[start_pos] = self[start_pos],self[end_pos]
                self.render
            else
                raise 'Cannot move there'
            end
            
        else
            raise 'No piece here'
        end
    end

end

=begin

Thigns to remember:
    -No swapping moves. Sometimes, we chomp.
    -Filling out the w's and b's with actual pieces
    -Nils get turned to NulPieces. 

=end