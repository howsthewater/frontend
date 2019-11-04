const counts = {
    installs: 0,
    activations: 0,
    fetches: 0
};

self.addEventListener('install', () => {
    console.log('install', ++counts.installs);
});

self.addEventListener('activate', () => {
    console.log('activate', ++counts.activations);
});

self.addEventListener('fetch', () => {
    console.log('fetches', ++counts.fetches);
});