import { AddUser, User } from '~/server/connectors/mongo'

export default defineEventHandler(async (event) => {
  const userInfo = await readBody(event) //ToDo : check input (name, email, password, role) is correct si jamais je fais un curl malicious sur le back je pex choisir le role ??
  console.log('cest le back')
  event.context.user.role === 'admin'? console.log('admin tout va bien') : console.log('not admin !!!)') 


  return AddUser(userInfo) //ToDo : empecher que n'importe qui ajoute des users, donc il faut bloquer l'accès à l'url /admin/users, bloquer l'ajout d'admin...
})