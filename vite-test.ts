const configModules = import.meta.glob('./firebase-missing.json', { eager: true });
console.log(configModules);
