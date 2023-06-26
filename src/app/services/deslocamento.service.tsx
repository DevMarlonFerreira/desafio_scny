import http from "../http-common";
import { IDeslocamento } from "typings/IDeslocamento.d"

class DeslocamentoDataService {
  getAll() {
    return http.get<IDeslocamento[]>("/Deslocamento");
  }

  get(id: number) {
    return http.get<IDeslocamento>(`/Deslocamento/${id}`);
  }

  create(data: Omit<IDeslocamento, "id">) {
    return http.post("/Deslocamento", data);
  }

  update(data: IDeslocamento, id: number) {
    return http.put(`/Deslocamento/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/Deslocamento/${id}`, { data: { "id": id } });
  }
}

const deslocamentoDataService = new DeslocamentoDataService();
export default deslocamentoDataService;