var compactObject = function (obj) {
    function dfc(obj) {
      if (!obj) return false;
      if (typeof obj !== "object") return obj;
      if (Array.isArray(obj)) {
        const newArray = [];
        for (let i = 0; i < obj.length; i++) {
          const curr = obj[i];
          const subRes = dfc(curr));
          if (subRes) {
            newArray.push(subRes);
          }
        }
        return newArray;
      }
      const newObj = {};
      for (const key in obj) {
        const subRes = dfc(obj[key]);
        if (subRes) {
          newObj[key] = subRes;
        }
      }
      return newObj;
    }
  
    return dfc(obj);
  };

  const obj = [null, 0, 5, [0], [false, 16]];

  const result = compactObject(obj);
  console.log(result);
  