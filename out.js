(() => {
  // vite-test.ts
  var import_meta = {};
  var configModules = import_meta.glob("./firebase-missing.json", { eager: true });
  console.log(configModules);
})();
