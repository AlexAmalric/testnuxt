import { ListUsers, User } from '~/server/connectors/mongo'

export default defineEventHandler(async (event) => {
    //event.context.role === 'admin'? console.log('admin tout va bien') : console.log('not admin !!!)
    event.context.user.role === 'admin'? console.log('admin tout va bien') : console.log('not admin !!!)')

  return ListUsers()
})