// Code your solution in this file!


const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

// forEach, sort, reduce

function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}


function logDriversByHometown(drivers, hometown){
  drivers.forEach(function(driver){
    if (driver.hometown === hometown){
        console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers){
  drivers.sort(function(a,b){
    let keyA = a.revenue;
    let keyB = b.revenue;


    // if(keyA > keyB){
    //   return 1;
    // }else if(keyA < keyB){
    //   return -1;
    // }else{
    //   return 0;
    // }
    //
  });

  return drivers;

  // console.log(drivers)


}
//
//
// arr.sort(function(a, b){
//     var keyA = new Date(a.updated_at),
//         keyB = new Date(b.updated_at);
//     // Compare the 2 dates
//     if(keyA < keyB) return -1;
//     if(keyA > keyB) return 1;
//     return 0;
// });
