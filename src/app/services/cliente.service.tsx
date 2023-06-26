import http from "../http-common";
import { ICliente } from "typings/ICliente.d"

class ClienteDataService {
  async getAll() {
    return await http.get<ICliente[]>("/Cliente");
  }

  get(id: number) {
    return http.get<ICliente>(`/Cliente/${id}`);
  }

  create(data: Omit<ICliente, "id">) {
    return http.post("/Cliente", data);
  }

  update(data: ICliente, id: number) {
    return http.put(`/Cliente/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/Cliente/${id}`, { data: { "id": id } });
  }
}

const clienteDataService = new ClienteDataService();
export default clienteDataService;