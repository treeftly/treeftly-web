import auth0js from 'auth0-js'

const DOMAIN = 'treeftly.au.auth0.com'
const CLIENT_ID = '2pwY0huXbPVwxaz0GhD7Rx7jrTafU5TQ'
const CONNECTION = 'Username-Password-Authentication'

export const auth0 = new auth0js.WebAuth({
  domain: DOMAIN,
  clientID: CLIENT_ID,
})

export const auth0Signup = ({ email, firstName, lastName, password }) =>
  new Promise((resolve, reject) => {
    auth0.signup(
      {
        email,
        password,
        connection: CONNECTION,
        given_name: firstName,
        family_name: lastName,
      },
      (err) => {
        if (!err) {
          return resolve()
        }

        return reject(err)
      }
    )
  })

export const auth0ForgotPassword = ({ email }) =>
  new Promise((resolve, reject) => {
    auth0.changePassword({ email, connection: CONNECTION }, (err, res) => {
      if (err) {
        return reject(err)
      }

      return resolve(res)
    })
  })
