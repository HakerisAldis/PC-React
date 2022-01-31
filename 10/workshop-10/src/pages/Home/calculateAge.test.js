import { calculateAge } from "./calculateAge";

const testDates = [
  { date: "", expected: 0 },
  { date: "2000-01-01", expected: 22 },
  { date: "2000-02-01", expected: 21 },
  { date: "2000-01-19", expected: 22 },
  { date: "2022-01-01", expected: 0 }
];

test('Calculates age from birth date', () => {
  testDates.forEach(date => {
    expect(calculateAge(date.date)).toBe(date.expected);
  });
});
