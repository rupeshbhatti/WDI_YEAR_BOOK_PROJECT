const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db } = require('../config/environment');
const Member = require('../models/student');

mongoose.connect(db, { useMongoClient: true });


Member.collection.drop();

Member
  .create([{
    name: 'Cameron Jones',
    image: 'https://user-images.githubusercontent.com/28314323/32336420-37401b96-bfe7-11e7-82ce-f7a9a94798c4.jpg'

  },{
    name: 'Rupesh Bhatti',
    image: 'https://user-images.githubusercontent.com/28314323/32336469-55698e72-bfe7-11e7-9d02-fdabd2a2d95d.jpg'

  },{
    name: 'Siobhan Potter',
    image: 'https://user-images.githubusercontent.com/28314323/32336467-5211c230-bfe7-11e7-9af5-286502b8fca1.jpg'

  },{
    name: 'Sandra Okoli',
    image: 'https://user-images.githubusercontent.com/28314323/32336479-57410a40-bfe7-11e7-87b9-18688869fa4a.jpg'

  },{
    name: 'Sarah Alpay',
    image: 'https://user-images.githubusercontent.com/28314323/32336488-598e339a-bfe7-11e7-938c-77b2abcf6af0.jpg'

  },{
    name: 'Plum Moore',
    image: 'https://user-images.githubusercontent.com/28314323/32336493-5b4f93e0-bfe7-11e7-8717-a4173c93b9d6.jpg'

  },{
    name: 'Nate Lansdall-Welfare',
    image: 'https://user-images.githubusercontent.com/28314323/32336499-5e015934-bfe7-11e7-989a-e9460c7f5c45.jpg'

  },{
    name: 'Matthew Yates',
    image: 'https://user-images.githubusercontent.com/28314323/32336501-5fe05f16-bfe7-11e7-8dc4-9150295af9fc.jpg'

  },{
    name: 'Masee Hussain',
    image: 'https://user-images.githubusercontent.com/28314323/32336502-618a543e-bfe7-11e7-96ad-b196d9e67860.jpg'

  },{
    name: 'Martha Chambers',
    image: 'https://user-images.githubusercontent.com/28314323/32336514-68a856ee-bfe7-11e7-9347-1e604e1bbc6f.jpg'

  },{
    name: 'Jonny Hall',
    image: 'https://user-images.githubusercontent.com/28314323/32336516-6a363aa8-bfe7-11e7-8a7c-d25da9814222.jpg'

  },{
    name: 'Janis Chan',
    image: 'https://user-images.githubusercontent.com/28314323/32336524-6d065f42-bfe7-11e7-846b-e85e025a4b9f.jpg'

  },{
    name: 'James Tang',
    image: 'https://user-images.githubusercontent.com/28314323/32336531-725b4304-bfe7-11e7-9db0-9d4d4bc81a96.jpg'

  },{
    name: 'Ismail Alami',
    image: 'https://user-images.githubusercontent.com/28314323/32336533-73e74cb8-bfe7-11e7-9f5b-c8839313a8d0.jpg'

  },{
    name: 'Hannah Cross',
    image: 'https://user-images.githubusercontent.com/28314323/32336546-7a3bb05e-bfe7-11e7-950d-0a916ee272d1.jpg'

  },{
    name: 'George Wilman',
    image: 'https://user-images.githubusercontent.com/28314323/32336553-7fcb53c6-bfe7-11e7-9439-516d73e35849.jpg'

  },{
    name: 'Josh Sadler',
    image: 'https://user-images.githubusercontent.com/28314323/32404919-97d16c8c-c152-11e7-8be2-101c2e431a46.jpg'

  },{
    name: 'Julie Bernal',
    image: 'https://user-images.githubusercontent.com/28314323/32404860-488bef72-c151-11e7-83a9-9924152bb158.jpg'

  },{
    name: 'Wilson Espina',
    image: 'https://user-images.githubusercontent.com/28314323/32404855-373aa592-c151-11e7-9661-5e870aca48b6.jpg'

  },{
    name: 'Gavin Hughes',
    image: 'https://user-images.githubusercontent.com/28314323/32404877-98317998-c151-11e7-8689-5d92aa4dec10.jpg'

  },{
    name: 'Ed Brodie',
    image: 'https://user-images.githubusercontent.com/28314323/32336580-90045f80-bfe7-11e7-8657-cc5de8040b7a.jpg'

  },{
    name: 'David Cooper',
    image: 'https://user-images.githubusercontent.com/28314323/32336585-926390b6-bfe7-11e7-8242-fbd8fdea91ba.jpg'

  },{
    name: 'Clara Cheung',
    image: 'https://user-images.githubusercontent.com/28314323/32404878-9b14a644-c151-11e7-88cc-6110e16d3628.jpg'
  }])
  .then((members) => console.log(`${members.length} members created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
