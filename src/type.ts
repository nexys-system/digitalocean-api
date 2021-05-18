export type DatabaseSize =
  | "db-s-1vcpu-1gb"
  | "db-s-1vcpu-2gb"
  | "db-s-2vcpu-4gb"
  | "db-s-4vcpu-8gb"
  | "db-s-6vcpu-16gb"
  | "db-s-8vcpu-32gb"
  | "db-s-16vcpu-64gb";

export type DORegion =
  | "ams2"
  | "ams3"
  | "blr1"
  | "fra1"
  | "lon1"
  | "nyc1"
  | "nyc2"
  | "nyc3"
  | "sfo1"
  | "sfo2"
  | "sgp1"
  | "tor1";

export type DoDatabaseEngine = "pg" | "mysql" | "redis";

export interface DatabaseCreate {
  name: string;
  engine: DoDatabaseEngine;
  version: "10" | "11" | "12" | "8" | "5"; //  PostgreSQL are "10", "11", and "12" defaulting to the later. For MySQL, the only available version is "8". For Redis, the only available version is "5".
  region: DORegion;
  size: DatabaseSize;
  num_nodes: 1;
  tags: string[];
}
