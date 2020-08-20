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