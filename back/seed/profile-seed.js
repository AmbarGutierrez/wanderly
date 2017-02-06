'use strict'

const Profile = require('../models').Profile;

let profileArr = [ 
  {
    "first_name":"Emily",
    "last_name":"Anderson",
    "gender":"Female",
    "age":18,
    "photo":"http://dummyimage.com/232x120.png/dddddd/000000",
    "country_origin":"China",
    "catch_phrase":"I love to try new foods!"
  },
  {
    "first_name":"Ruby",
    "last_name":"Mason",
    "gender":"Female",
    "age":71,
    "photo":"http://dummyimage.com/184x159.png/cc0000/ffffff",
    "country_origin":"Indonesia",
    "catch_phrase":"I love to relax and rejuvenate!"
  },
  {
    "first_name":"Kevin",
    "last_name":"Day",
    "gender":"Male",
    "age":71,
    "photo":"http://dummyimage.com/232x145.bmp/cc0000/ffffff",
    "country_origin":"Indonesia",
    "catch_phrase":"I love being in a different scenery"
  }
];

const profileSeed = () =>{
  Profile.sync({force:true})
  .then(()=>{
    Profile.bulkCreate(profileArr)
  })
};

module.exports = profileSeed;