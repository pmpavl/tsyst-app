interface IUserTokens {
  accessToken: string;
  refreshToken: string;
}

class UserTokens {
  public accessToken: string;

  public refreshToken: string;

  constructor(obj: IUserTokens) {
    this.accessToken = obj.accessToken;
    this.refreshToken = obj.refreshToken;
  }
}

export { UserTokens, type IUserTokens };
