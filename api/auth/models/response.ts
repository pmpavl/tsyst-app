export interface RegistrationResponse {
  status: string
}

export interface AuthenticationResponse {
  accessToken: string
  accessTokenMaxAge: number
  refreshToken: string
  refreshTokenMaxAge: number
}

export interface IdentificationResponse {
  exist: boolean
}

export interface RefreshResponse {
  accessToken: string
  accessTokenMaxAge: number
}


export interface EmailExistResponse {
  exist: boolean
}

export interface EmailSaltResponse {
  salt: string
}
