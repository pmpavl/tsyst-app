export interface RegistrationRequest {
  email: string
  password: string
  salt: string
  meta: {
    firstname: string
    lastname: string
    school: number
    class: number
  }
}

export interface AuthenticationRequest {
  email: string
  password: string
}

export interface RefreshRequest {
  refreshToken: string
}
