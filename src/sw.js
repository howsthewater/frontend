const counts = {
    installs: 0,
    activations: 0,
    fetches: 0
};

window.self.addEventListener('install', () => {
    console.log('install', ++counts.installs);
});

window.self.addEventListener('activate', () => {
    console.log('activate', ++counts.activations);
});

window.self.addEventListener('fetch', () => {
    console.log('fetches', ++counts.fetches);
});