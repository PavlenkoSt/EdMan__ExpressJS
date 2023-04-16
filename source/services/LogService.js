import { LogODM } from '../odm';

export class LogService {
  constructor() {}

  async create(data) {
    const log = LogODM.create(data);

    return log;
  }
}
