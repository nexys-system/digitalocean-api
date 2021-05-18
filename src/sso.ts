import fetch from "node-fetch";
import { objToQueryString } from "./utils";

const host = "https://cloud.digitalocean.com/v1/oauth";

export interface Config {
  client: string;
  secret: string;
  redirectUrl: string;
}

export interface SSOResponse {
  access_token: string;
  token_type: "bearer";
  expires_in: number;
  refresh_token: string;
  scope: "read" | "write";
  created_at: number;
  info: {
    name: string;
    email: string;
    uuid: string;
  };
}

export const getOAuthUrl = (config: Config) => {
  const options = {
    client_id: config.client,
    redirect_uri: config.redirectUrl,
    response_type: "code",
    scope: "write",
  };

  return host + "/authorize?" + objToQueryString(options);
};

export const getToken = async (
  code: string,
  config: Config
): Promise<SSOResponse> => {
  const options = {
    grant_type: "authorization_code",
    code,
    client_id: config.client,
    client_secret: config.secret,
    redirect_uri: config.redirectUrl,
  };
  const url = host + "/token?" + objToQueryString(options);

  const r = await fetch(url, { method: "POST" });
  //console.log(r);
  const response: SSOResponse = await r.json();

  return response;
};
