
class Employee
    attr_reader :salary
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        @salary * multiplier
    end
end

class Manager < Employee
    attr_accessor :subordinates
    attr_reader :salary

    def initialize(name, title, salary, boss)
        super
        @subordinates = []
    end

    def bonus(multiplier)
        total = 0
        queue = [self]
        until queue.empty?
            first = queue.shift
            first.subordinates.each do |sub|
                total += sub.salary
                queue << sub if sub.is_a?(Manager)
            end 
        end
        bonus = total * multiplier
    end


end

Darren = Manager.new('Darre', 'TA Manager', 78000, 'Ned')
Shawna = Employee.new('Shawna', 'TA', 12000, Darren)
David = Employee.new('David', 'TA', 10000, Darren)
Ned = Manager.new('Ned', 'Founder', 1000000, nil)

Darren.subordinates << Shawna
Darren.subordinates << David
Ned.subordinates << Darren