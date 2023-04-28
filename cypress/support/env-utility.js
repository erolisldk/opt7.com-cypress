const localUrl = 'http://localhost';
const kubeLocalUrl = 'http://kube.local';
const prodUrl = 'https://automationintesting.online';
const dockerUrl = 'http://rbp-proxy';
const kubeUrl = 'http://rbp-proxy.restful-booker-platform';

export function getUrl() {
  let environment = Cypress.env('ENV');
  if (environment == null) return prodUrl;
  else if (environment == 'prod') return prodUrl;
  else if (environment == 'local') return localUrl;
  else if (environment == 'docker') return dockerUrl;
  else if (environment == 'kube') return kubeUrl;
  else if (environment == 'kubeLocal') return kubeLocalUrl;
}

export function getApiUrl() {
  let environment = Cypress.env('ENV');
  if (environment == null) return prodUrl;
  else if (environment == 'prod') return prodUrl;
  else if (environment == 'local') return localUrl;
  else if (environment == 'docker') return dockerUrl;
  else if (environment == 'kube') return kubeUrl;
  else if (environment == 'kubeLocal') return kubeLocalUrl;
}
