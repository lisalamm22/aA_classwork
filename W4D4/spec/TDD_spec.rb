require "rspec"
require "TDD"

describe Array do
  subject(:new_arr) {[1,2,3,4,2,2,2]}
  subject(:zero_array) {[-1, 0, 2, -2, 1]}
  subject(:matrix) {[[2,3],[1,2]]}
  subject(:stocks) {[100,200,400,700,300,50,675]}
  let(:best_pair) {stocks.stock_picker}

  subject(:towers){[[1, 2, 3, 4, 5],[],[]]}
  subject(:towers_won){[[],[1, 2, 3, 4, 5],[]]}

  describe "#my_uniq" do 
      it "should not return duplicate elements" do
          expect(new_arr.my_uniq).to eq(new_arr.uniq)
      end

      it "should return a new array" do 
          expect(new_arr.my_uniq).to_not be(new_arr)
      end
  end

  describe "#two_sum" do 
    context "the first element in the pair should be in the array first" do 
      it "should be ordered pairs" do
        expect(zero_array.two_sum).to eq([[0, 4], [2, 3]])
      end

      it "should sum two elements that equal zero" do 
        zero = zero_array.two_sum
        sum = zero_array[zero[0].first] + zero_array[zero[0].last]
        expect(sum).to eq(0)
      end
      
    end
  end

  describe "#my_transpose" do
    it "rows should become columns" do
        expect(matrix.my_transpose).to eq(matrix.transpose)
    end

    it "should return a new array" do
      expect(matrix.my_transpose).to_not be(matrix)
    end
  end

  
  describe "#stock_picker" do 
    it "should return biggest difference in stock prices" do
      expect(best_pair).to eq([5, 6])
    end

    it "should be a pair" do
      expect(best_pair.length).to eq(2)
    end

    it "should return highest day after lowest day" do
      expect(best_pair[0]).to be <(best_pair[1])
    end
  end

  describe "#towers_of_hanoi" do 
    it "should have 3 arrays" do
      expect(towers.length).to eq(3)
    end

    # it "should use a loop" do
    #   expect(towers.towers_of_hanoi).to receive(:move)
    #   expect(towers.towers_of_hanoi).to receive(:won?)
    # end
    # context "when moving to a stack with elements" do 
    #   it "should move to a stack with larger elements" do
    #     expect(towers.move(0,1)).to receive(:retry)
    #   end
    # end
  end

  
  describe "#move" do
    before(:each){towers.move(0,1)}
    it "should take in valid arguments" do
      expect{towers.move(0,3)}.to raise_error(ArgumentError)
    end

    it "should take in two arguments " do
      expect{towers.move(0,1)}.to_not raise_error
    end

    it "should only move top element from a stack" do
      expect(towers).to eq([[2,3,4,5],[1],[]])
    end
  
  end

  describe "#won?" do
    

    it "should only have one populated stack" do
      expect(towers_won.won?).to be true
    end 

  end
end
    

