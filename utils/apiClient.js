import axios from 'axios';
export class ApiClient{
  constructor(baseURL){ this.client = axios.create({ baseURL }); }
  // placeholder for API interactions if needed
}
