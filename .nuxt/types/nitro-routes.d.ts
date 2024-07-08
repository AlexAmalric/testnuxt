// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/[...]').default>>>>
    }
    '/api/users': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/index.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/index.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/index.post').default>>>>
    }
    '/api/users/login': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/login.post').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}