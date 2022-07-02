import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@vueauth/core'
import supabaseConfig from 'app/config/supabase'
import {
  SupabasePlugin,
  useAuthenticatedRedirector,
  useAuthRedirector,
  useAuthState,
  useFetchUser,
  useHandlesErrors,
  useIdentityPasswordLogin,
  useIdentityPasswordLogout,
  useIdentityPasswordRegister,
  usePasswordResetViaEmail,
  useUnauthenticatedRedirector,
  useUpdatePassword
} from '@vueauth/supabase'

export default boot(({ app }) => {
  app.use(SupabasePlugin, supabaseConfig) // Be sure to update config/supabase to configure your app!

  app.use(AuthPlugin, {
    default: 'supabase',
    providers: {
      supabase: {
        features: {
          'identityPassword:register': useIdentityPasswordRegister,
          'identityPassword:login': useIdentityPasswordLogin,
          'identityPassword:logout': useIdentityPasswordLogout,
          unauthenticatedRedirector: useUnauthenticatedRedirector,
          authenticatedRedirector: useAuthenticatedRedirector,
          errorHandler: useHandlesErrors,
          fetchUser: useFetchUser,
          authState: useAuthState,
          authRedirector: useAuthRedirector,
          passwordResetViaEmail: usePasswordResetViaEmail,
          updatePassword: useUpdatePassword
        }
      }
    }
  })
})
