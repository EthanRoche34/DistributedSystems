export interface Friend {
    name: string;
    phone: string;
    dob? : Date;   // New
    age: number;
    interests? : string[]   // New
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
    name: string;
    email: string
}

export type Department = "Engineering" | "Finance" | "HR";
export interface ColleagueV2 {
  name: string;
  department: Department;    // *****
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2;
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

//has all the properties of Friend but each property is optional
//allows representation of objects with some but not all properties from Friend
export type FriendPartial = Partial<Friend>

// Type for gaining access to an event, e.g. concert
// has all properties of colleague except contact
export type EventPass = Omit<Colleague, "contact"> & {
  passCode : number;
}

// Make person's properties immutable.
// Pick means it only has the name and phone properties
// Readonly means the values can't be changed
export type SecureFriendContact = Readonly<Pick<Friend,"name" | "phone" > >


export type ColleagueWithoutDepartment = Omit<Colleague, 'department'>;
