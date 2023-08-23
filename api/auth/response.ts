import { IUserTokens } from '@/models';

interface IPasswordSaltByEmailResponse { passwordSalt: string; }
interface IAuthenticationResponse extends IUserTokens { }
interface IRefreshResponse { accessToken: string; }

export {
  type IPasswordSaltByEmailResponse,
  type IAuthenticationResponse,
  type IRefreshResponse,
};
