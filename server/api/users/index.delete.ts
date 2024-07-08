import { DeleteUser, User } from '~/server/connectors/mongo'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
    //event.context.role === 'admin'? console.log('admin tout va bien') : console.log('not admin !!!)
    event.context.user.role === 'admin'? console.log('admin tout va bien') : console.log('not admin !!!)')
  // const { email } = await readBody(event)
  return DeleteUser(body.email)
})