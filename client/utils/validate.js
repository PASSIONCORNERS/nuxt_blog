// check empty fields
export const isEmpty = (value) => {
  if (value === "") return false;
  return true;
};
// check email format
export const isEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // The test() method tests for a match in a string.
  // If it finds a match, it returns true, otherwise it returns false.
  return re.test(email);
};
// check password length
export const isLength = (password) => {
  if (password.lenght < 6) return false;
  return true;
};
// check password match
export const isMatch = (password, cf_password) => {
  if (password === cf_password) return true;
  return false;
};
