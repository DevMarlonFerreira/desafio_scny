import http from "../http-common";
import { IVeiculo } from "typings/IVeiculo.d"

class VeiculoDataService {
  getAll() {
    return http.get<IVeiculo[]>("/Veiculo");
  }

  get(id: number) {
    return http.get<IVeiculo>(`/Veiculo/${id}`);
  }

  create(data: Omit<IVeiculo, "id">) {
    return http.post("/Veiculo", data);
  }

  update(data: IVeiculo, id: number) {
    return http.put(`/Veiculo/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/Veiculo/${id}`, { data: { "id": id } });
  }
}

const veiculoDataService = new VeiculoDataService();
export default veiculoDataService;