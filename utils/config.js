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
  const timestamp = Date.now();
  return `${randomRole.toLowerCase()}_${timestamp}`;
}

function generateUniqueTowerName() {
  const allTowers = [
    'Rose', 'Shanghai Tower', 'Willis Tower', 'Eiffel Tower', 'Burj Khalifa',
    'Empire State', 'One World Trade', 'Taipei 101', 'Petronas Towers', 'Lotte World Tower'
  ];
  const randomTower = allTowers[Math.floor(Math.random() * allTowers.length)];
  const timestamp = Date.now();
  return `${randomTower.toLowerCase()}_${timestamp}`;
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

// Helper function to generate random number in a range
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1; // 1 to max
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

  TowerData: () => {
    const initial = {
      towerName: generateUniqueTowerName(),
      description: 'A new tower in the estate',
      numFloors: getRandomInt(10), // max 10 floors
      numUnits: getRandomInt(6),   // max 6 units
    };

    const updated = {
      towerName: `updated_${generateUniqueTowerName()}`,
      description: 'This tower was updated in automation test',
      numFloors: getRandomInt(15), // allow bigger range for update
      numUnits: getRandomInt(10),  // allow more units for update
    };

    return { initial, updated };
  },
  commMemberData: () => ({
    fullName: generateRandomName(),
    email: generateRandomEmail(),
    contact: generateRandomBDPhoneNumber(),
  }),



};

module.exports = config;
