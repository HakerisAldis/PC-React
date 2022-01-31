export function calculateAgeWithMonths(input) {
  let [age, m] = getYearsAndMonths(input);
    if (m < 0){
      m = 12 + m;
    }
    return `${age} m. ir ${m} mėn.`;
}

export function calculateAge(input) {
  const [age] = getYearsAndMonths(input);
  return age;
}

function getYearsAndMonths(input){
  if (input === "") return [0, 0];
  const today = new Date();
  const birthDate = new Date(input);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  const hadBirthdayThisYear = m < 0 || (m === 0 && today.getDate() < birthDate.getDate())
  if (hadBirthdayThisYear) 
  {
      age--;
  }

  return [age, m];
}