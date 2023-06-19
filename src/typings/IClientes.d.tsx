import { ICliente } from "./ICliente.d";

export interface IClientes {
    map(arg0: (cliente: any) => import("react").JSX.Element): import("react").ReactNode;
    clientes: [ICliente];
  }
  