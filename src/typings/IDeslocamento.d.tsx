export interface IDeslocamento {
  id: number;
  kmInicial?: number;
  kmFinal?: number;
  inicioDeslocamento?: Date | string;
  fimDeslocamento?: Date;
  checkList?: string;
  motivo?: string;
  observacao?: string;
  idCondutor?: number;
  idVeiculo?: number;
  idCliente?: number;
}
