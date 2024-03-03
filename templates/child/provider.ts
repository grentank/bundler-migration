import type { AxiosInstance } from 'axios';
import axios from 'axios';

class Service {
  constructor(private client: AxiosInstance) {}

  async getData(): Promise<string> {
    await this.client.get('/').catch(() => console.log('failed request'));
    return 'random shit';
  }
}

const api = new Service(axios.create({ withCredentials: true }));

export default api;
