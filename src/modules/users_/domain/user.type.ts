// create a type object for domain core business logic

import type { UserEmail } from "./value-obects/user.email";

// example:
export interface UserType {
  id: UniqueId;
  name: string,
  surname: string,
  email: UserEmail,
}