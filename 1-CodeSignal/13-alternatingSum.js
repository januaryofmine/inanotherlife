function alternatingSums(a) {
  return a.reduce(
    (acc, curr, index) => {
      if (index % 2 == 0) {
        acc[0] += curr;
      } else acc[1] += curr;

      return acc;
    },
    [0, 0]
  );
}

alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])
