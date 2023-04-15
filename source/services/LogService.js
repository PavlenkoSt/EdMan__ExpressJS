import { LogODM } from '../odm';

export class LogService {
  constructor(data) {
    this.data = data;
  }

  async create() {
    const log = LogODM.create(this.data);

    return log;
  }
}
