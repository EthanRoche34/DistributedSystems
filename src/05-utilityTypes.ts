import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass, ColleagueWithoutDepartment } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )

  console.log("===== Secure Find Friends =====")
  console.log(result)
  

  function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  console.log("===== Generate Event Pass =====")
  console.log(generateEventPass(colleagues.current[0]));


  // Added ColleagueWithoutDepartment type as const combined was throwing errors
  // Due to department not being included
  // This new Utility type resolved this
  
  function intersection(
    friends: Friend[],
    colleagues: Colleague[]
  ): (Friend | ColleagueWithoutDepartment)[] {

    return friends.reduce((result, friend) => {
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        // Colleague is also a Friend
        const combined: Friend | ColleagueWithoutDepartment = {
            name: friend.name,
            age: friend.age,
            contact: {
                email: colleague.contact.email,
                extension: colleague.contact.extension
            },
        }
        result.push(combined)
      }
      return result;
    }, [] as (Friend | ColleagueWithoutDepartment)[])
  }
  
  console.log(intersection(friends, colleagues.current));