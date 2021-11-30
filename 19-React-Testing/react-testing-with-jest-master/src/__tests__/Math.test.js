import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const input = [3, 5];
  const expected = 8;

  // Act
  const got = Add(input[0], input[1]);

  // Assert
  expect(got).toBe(expected);

})

test('Return substraction of a - b', () => {
  // Arrange
  const input = [9, 2]
  const expected = 7


  // Act
  const got = Substract(input[0], input[1])


  // Assert
  expect(got).toBe(expected)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const input = [4, 5];
  const expected = 20;

  // Act
  const got = Multiplication(input[0], input[1]);

  // Assert
  expect(got).toBe(expected)

})