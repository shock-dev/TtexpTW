export const groupByKey = (list, key) =>
  list.reduce((r, a) => {
    r[a[key]] = r[a[key]] || [];
    r[a[key]].push(a);
    return r;
  }, {});
