export interface ICondutor {
    id: number;
    nome?: string;
    numeroHabilitacao?: string;
    categoriaHabilitacao?: string;
    vencimentoHabilitacao: Date | string;
  }
  