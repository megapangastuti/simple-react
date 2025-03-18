enum Roles {
  ADMIN = "admin",
  MEMBER = "member",
  STAFF = "staff",
  MANAGER = "manager",
}

// let userRole: Roles = Roles.ADMIN;

// switch (+Roles) {
//   case Roles.ADMIN: {
//     console.log("User is an admin");
//     break;
//   }
//   case Roles.MANAGER: {
//     console.log("User is a manager");
//     break;
//   }
//   default: {
//     console.log("User role is unhandled");
//     break;
//   }
// }

enum EditMode {
  View = 0,
  Edit = 1,
  Delete = 2,
}

switch (+EditMode) {
  case EditMode.Delete:
    console.log(EditMode.Delete);
    break;
  case EditMode.Edit:
    console.log(EditMode.Delete);
    break;
  default:
    console.log(EditMode.Delete);
    break;
}

var grade: string = "A";
switch (grade) {
  case "A": {
    console.log("Excellent");
    break;
  }
  case "B": {
    console.log("Good");
    break;
  }
  case "C": {
    console.log("Fair");
    break;
  }
  case "D": {
    console.log("Poor");
    break;
  }
  default: {
    console.log("Invalid choice");
    break;
  }
}
