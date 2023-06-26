import http from "../http-common";
import { ICondutor } from "typings/ICondutor";

class CondutorDataService {
  getAll() {
    return http.get<ICondutor[]>("/Condutor");
  }

  get(id: number) {
    return http.get<ICondutor>(`/Condutor/${id}`);
  }

  create(data: Omit<ICondutor, "id">) {
    return http.post("/Condutor", data);
  }

  update(data: ICondutor, id: number) {
    return http.put(`/Condutor/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/Condutor/${id}`, { data: { id: id } });
  }
}

const condutorDataService = new CondutorDataService();
export default condutorDataService;
