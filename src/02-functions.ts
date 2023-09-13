import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0])) //If this is run before allOlder, the older age from this will still be here

function allOlder(fs: Friend[]) : string[] {
    const ages = fs.map((friends) => ({
        ...friends,
        age : friends.age += 1 }))
    //return `${fs.name} is now ${f.age}`
    return ages.map((friend) => `${friend.name} is now ${friend.age}`)
}
//could use for each loop and use push

console.log("\n")
console.log(allOlder(friends))
console.log("\n")

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  console.log("\n")

  function addColleague(cs : Colleague[], ColName : string, ColDept : string, ColEmail : string) {
    var currentHighestExtension = highestExtension(colleagues.current);
    cs.push({
         name: ColName,
         department: ColDept,
         contact: {
            email: ColEmail,
            extension: currentHighestExtension.contact.extension + 1
         }
    })
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));