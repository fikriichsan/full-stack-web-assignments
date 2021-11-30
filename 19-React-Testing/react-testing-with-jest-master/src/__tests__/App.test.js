import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const input = [[{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  }], {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }]
  const expected = [ 
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    },{
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    }
  ]

  // Act
  const got = AddTodo(input[0], input[1])

  // Assert
  expect(got).toEqual(expected)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const input = [[{
    id: 1,
    name: 'Learn JSX',
    isComplete: false,
  }], {
    id: 2,
    name: 'Build awasome react app',
    isComplete: false,
  }]
  const expected = [ 
    {
      id: 2,
      name: 'Build awasome react app',
      isComplete: false,
    }
  ]
  // Act
  const got = AddTodo(input[0], input[1])

  // Assert
  expect(got).not.toEqual(expected)

})