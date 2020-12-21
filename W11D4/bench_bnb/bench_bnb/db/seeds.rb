# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

# Benches
bench1 = Bench.create!(description:'Santa Monica Downtown', lat: 34.012619, long: -118.496700)
bench2 = Bench.create!(description:'Venice Beach between the basketball courts and muscle beach', lat: 33.985808, long: -118.472920)
bench3 = Bench.create!(description:'Venice Canals', lat: 33.984762, long:-118.466524)
bench4 = Bench.create!(description:'The park you can see Derek from', lat: 34.087075, long:-117.963688)
bench5 = Bench.create!(description:'Skid Row', lat:34.044272, long:-118.243820)
bench6 = Bench.create!(description:'The park you can see Nate and his seals from', lat:37.804880, long:-122.424252)
bench7 = Bench.create!(description:'The mansion park', lat: 37.797179, long:-122.457498)
bench8 = Bench.create!(description:'The park you can see the big red bridge from', lat:37.769637, long:-122.488572)
bench9 = Bench.create!(description:'Cemetery park', lat:33.992128, long:-118.384722)
bench10 = Bench.create!(description:'Baldwin Hill Scenic Overlook', lat:34.018176, long:-118.381286)