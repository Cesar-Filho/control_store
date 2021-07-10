import { User } from 'src/models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Cesar'

  expect(user.name).toEqual('Cesar')
})
