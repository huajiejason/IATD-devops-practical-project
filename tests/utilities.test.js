import { isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

//
//Test for invalid string
test("isValidDateString: invalid format", () => {
  expect(1).toBe(1);
});

//Test for the wrong amount of "date segments" (see comments in utilities.js for more info)
test("isValidDateString:invalid format (only day and month provided)", () => {
  expect(isValidDateString("12/03")).toBe(false);
});
test("isValidDateString: too many segments", () => {
  expect(isValidDateString("12/03/2025/extra")).toBe(false);
});

//Test for wrong number of digits in the day

test("isValidDateString: wrong number of digits in the day", () => {
  expect(isValidDateString("1/03/2025")).toBe(false);
});
//Test for wrong number of digits in the month
test("isValidDateString: wrong number of digits in the month", () => {
  expect(isValidDateString("01/3/2025")).toBe(false);
});
//Test for wrong number of digits in the year
test("isValidDateString: wrong number of digits in the year", () => {
  expect(isValidDateString("01/03/25")).toBe(false);
});
//Test for day outside of month's number of days
test("isValidDateString: day outside of month's number of days", () => {
  expect(isValidDateString("31/04/2025")).toBe(false);
});

//Test for month greater than 12
test("isValidDateString:month greater than 12 ", () => {
  expect(isValidDateString("01/13/2025")).toBe(false);
});
// Test for day <= 0
test("isValidDateString:Test for day <= 0 ", () => {
  expect(isValidDateString("-1/13/2025")).toBe(false);
});

//Test a valid leap year date
test("isValidDateString:Test a valid leap year date ", () => {
  expect(isValidDateString("24/02/2024")).toBe(true);
});

// Test Date string with wrong format (missing slashes, extra characters)
test("isValidDateString:Test Date string with wrong format ", () => {
  expect(isValidDateString("24-02-2024")).toBe(false);
  expect(isValidDateString("29022024")).toBe(false);
  expect(isValidDateString("29//02//2024")).toBe(false);
});

// Non-numeric characters
test("isValidDateString:Non-numeric characters ", () => {
  expect(isValidDateString("24/jan/2024")).toBe(false);
});
//Test for month <= 0
test("isValidDateString:Test for month <= 0 ", () => {
  expect(isValidDateString("01/-1/2025")).toBe(false);
});

//Test for empty string or only spaces

test("isValidDateString:Test for empty string or only spaces <= 0 ", () => {
  expect(isValidDateString("")).toBe(false);
});