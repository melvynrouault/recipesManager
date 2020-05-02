async function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

async function validatePassword(pswd) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/;
  return re.test(String(pswd));
}

module.exports = {
  validateEmail,
  validatePassword,
};