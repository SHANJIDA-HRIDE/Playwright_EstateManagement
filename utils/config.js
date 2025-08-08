function generateRandomEmail() {
  const timestamp = Date.now();
  return `user${timestamp}@example.com`;
}

function generateRandomName() {
  const firstNames = ['Shanjida', 'Ayesha', 'Tania', 'Nusrat', 'Fatima'];
  const lastNames = ['Hride', 'Akter', 'Rahman', 'Khan', 'Sultana'];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

function generateRandomBDPhoneNumber() {
  const secondDigit = Math.floor(Math.random() * 7) + 3; // 3–9
  const rest = Math.floor(10000000 + Math.random() * 90000000); // 8 digits
  return `01${secondDigit}${rest}`;
}

function generateUniqueRoleName() {
  const allRoles = ['Manager', 'Developer', 'Tester', 'Support', 'HR', 'Designer'];
  const randomRole = allRoles[Math.floor(Math.random() * allRoles.length)];
  const timestamp = Date.now(); // ensures uniqueness
  return `${randomRole.toLowerCase()}_${timestamp}`;
}

function generateRandomRoleDescription() {
  const descriptions = [
    'Responsible for overall management',
    'Handles software development',
    'Conducts quality assurance tests',
    'Provides customer support',
    'Manages human resources',
    'Designs user interfaces',
    'Maintains system infrastructure'
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

const config = {
  loginData: {
    validEmail: 'shanjidahride8@gmail.com',
    validPassword: 'jklmctM1&@&',
  },

  orgMemberData: () => ({
    fullName: generateRandomName(),
    email: generateRandomEmail(),
    contact: generateRandomBDPhoneNumber(),
    roleName: generateUniqueRoleName(),
    roleDescription: generateRandomRoleDescription(),
  }),

   RoleData: () => ({
    roleName: generateUniqueRoleName(),
    roleDescription: generateRandomRoleDescription(),
  }),
};

module.exports = config;
