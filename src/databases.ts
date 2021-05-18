import fetch from "node-fetch";

import * as T from "./type";

const host = "https://api.digitalocean.com/v2";

export const request = async <A>(
  path: string,
  token: string,
  method: "GET" | "POST" | "DELETE" = "GET",
  data: any = undefined
): Promise<A> => {
  const url = host + path;
  const headers = {
    authorization: "Bearer " + token,
    "content-type": "application/json",
  };
  const body = data ? JSON.stringify(data) : undefined;
  console.log(body);
  const r = await fetch(url, { headers, body, method });

  return r.json();
};

export const list = async (token: string) => {
  const r = await request<{ databases: any }>("/databases", token);

  return r.databases;
};

export const create = async (data: T.DatabaseCreate, token: string) =>
  request("/databases", token, "POST", data);

export const deleteByUuid = async (uuid: string, token: string) =>
  request("/databases/" + uuid, token, "DELETE");