var d = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var o = (c, a, e) => a in c ? d(c, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[a] = e, Z = (c, a) => {
  for (var e in a || (a = {}))
    r.call(a, e) && o(c, e, a[e]);
  if (A)
    for (var e of A(a))
      m.call(a, e) && o(c, e, a[e]);
  return c;
};
var p = (c, a) => {
  var e = {};
  for (var t in c)
    r.call(c, t) && a.indexOf(t) < 0 && (e[t] = c[t]);
  if (c != null && A)
    for (var t of A(c))
      a.indexOf(t) < 0 && m.call(c, t) && (e[t] = c[t]);
  return e;
};
import M, { forwardRef as l } from "react";
import v from "../../lib/OptiBase.mjs";
const C = l((t, e) => {
  var V = t, { children: c } = V, a = p(V, ["children"]);
  return /* @__PURE__ */ M.createElement(v, Z({ ref: e }, a), c, /* @__PURE__ */ M.createElement("path", { d: "M229,45a12,12,0,0,0-12.85,1.84c-24.71,21.41-44.53,13.31-74.82-1.68C113.19,31.27,78.17,13.94,40.14,46.88A12,12,0,0,0,36,56V224a12,12,0,0,0,24,0V181.71c22.84-17.13,42.1-9.11,70.68,5,16.23,8,34.74,17.2,54.8,17.2,14.72,0,30.28-4.94,46.38-18.88A12,12,0,0,0,236,176V56A12,12,0,0,0,229,45ZM185.48,83.91A63,63,0,0,0,212,78.08v32.15c-11,8.26-21.2,10.67-32,9.37V83.66C181.81,83.81,183.64,83.91,185.48,83.91ZM156,78.08v34.09c-4.64-2-9.5-4.4-14.68-7A255.21,255.21,0,0,0,116,93.83V59.75c4.64,2,9.5,4.4,14.68,7A252.91,252.91,0,0,0,156,78.08ZM92,52.32V88.24a63.33,63.33,0,0,0-32,5.61V61.68C71,53.42,81.2,51,92,52.32ZM86.52,148A63,63,0,0,0,60,153.86V121.7c11-8.25,21.2-10.66,32-9.36v35.94C90.19,148.13,88.36,148,86.52,148ZM116,153.86V119.77c4.64,2,9.5,4.4,14.68,7A252.91,252.91,0,0,0,156,138.1v34.09c-4.64-2.05-9.5-4.4-14.68-7A250.66,250.66,0,0,0,116,153.86Zm64,25.76V143.68c1.81.14,3.64.24,5.48.24A62.85,62.85,0,0,0,212,138.07v32.19C201,178.52,190.8,180.92,180,179.62Z" }));
});
C.displayName = "Bold";
export {
  C as Bold
};