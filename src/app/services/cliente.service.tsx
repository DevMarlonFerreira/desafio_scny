import http from "../http-common";
import { ICliente } from "typings/ICliente.d"

class ClienteDataService {
  getAll() {
    return http.get<ICliente[]>("/Cliente");
  }

  get(id: number) {
    return http.get<ICliente>(`/Cliente/${id}`);
  }

  create(data: Omit<ICliente, "id">) {
    return http.post<ICliente>("/Cliente", data);
  }

  update(data: ICliente, id: number) {
    return http.put<ICliente>(`/Cliente/${id}`, data);
  }

  delete(id: number) {
    return http.delete<string>(`/Cliente/${id}`, { data: { "id": id } });
  }
}

const clienteDataService = new ClienteDataService();
export default clienteDataService;