var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M184,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,112,232a7.9,7.9,0,0,1-4.11-1.14,8.3,8.3,0,0,1-3.9-7.18V144L52.76,182.4a8,8,0,0,1-11.16-1.55,8.26,8.26,0,0,1,1.8-11.43L98.66,128,43.38,86.57a8.19,8.19,0,0,1-2.13-10.93,8,8,0,0,1,11.51-2L104,112V32.24a8.21,8.21,0,0,1,2.83-6.34,8,8,0,0,1,10-.3l33.62,25.2A4,4,0,0,1,152,54v52a4,4,0,0,1-1.6,3.2L125.34,128l55.5,41.6A8,8,0,0,1,184,176Zm53.47-77.87L219.37,80l18.11-18.11a8.21,8.21,0,0,0,.41-11.37,8,8,0,0,0-11.49-.18L208.05,68.69,189.93,50.58a8.23,8.23,0,0,0-10.83-.88,8,8,0,0,0-.73,12L196.73,80,178.58,98.13a8.2,8.2,0,0,0-.6,11.1,8,8,0,0,0,11.71.43l18.36-18.35,18.35,18.35a8,8,0,0,0,11.72-.43A8.21,8.21,0,0,0,237.51,98.13Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
