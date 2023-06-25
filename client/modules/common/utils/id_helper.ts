import { v4 as uuidv4 } from "uuid";

function getUniqueId() {
  return uuidv4();
}

export { getUniqueId };
