// supports renaming one or more properties at a time
// ex: rename the 'name' prop to 'firstname in my `obj`:
// renameKeys({name: 'firstName'}, obj);

export const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
