import {Friend, Colleague, EmailContact} from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0])) //If this is run before allOlder, the older age from this will still be here

function allOlder(fs: Friend[]) {
    const ages = fs.map((friends) => ({ //Creating new array from friends array
        ...friends, //Taking in everything from friends
        age : friends.age += 1 }))
    //return `${fs.name} is now ${f.age}`
    return ages.map((friend) => `${friend.name} is now ${friend.age}`)
}
//could use for each loop and use push

console.log("\n")
console.log(allOlder(friends))
console.log("\n")

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  
  console.log(highestExtension(colleagues.current));
  console.log("\n")

  function addColleague(cs : Colleague[], ColName : string, ColDept : string, ColEmail : string) {
    var currentHighestExtension = highestExtension(cs); //Getting current highest extension in colleague array
    cs.push({ //Pushing the new colleague
         name: ColName,
         department: ColDept,
         contact: {
            email: ColEmail,
            extension: currentHighestExtension.contact.extension + 1 //Incrementing on the current highest extension
         }
    })
  }

  //higher order functions


  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ){
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  console.log("\n===Sort Colleagues===")
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 3));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  console.log("=====================\n")
  

  function findFriends(
    friends: Friend[],
    callback: (friend : Friend) => boolean
  ): Friend[] {
    const filter = friends.filter(callback);
    const found = new Array();

    filter.forEach(f => {
        found.push( `${f.name}`)
    });
    return found;
  }

console.log("\n===Find Friends===")
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
console.log("==================\n")

function addInterest(fs : Friend, interest : string) {
  const updated = {...fs}   //Cloning inputted friend

  if (!updated.interests) {   //Checks it see if 
    updated.interests = [];
  }

  updated.interests.push(interest);

  return updated;
    };

console.log("\n===Add Interest===")
console.log(addInterest(friends[1], 'Politics'))
console.log("==================")
