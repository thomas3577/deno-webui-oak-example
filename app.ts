import { WebUI } from '@webui/webui';

const worker = new Worker(import.meta.resolve('./api.ts'), {
  type: 'module'
});

const window = new WebUI();
window.show('http://localhost:8080');

await WebUI.wait();

worker.terminate();
