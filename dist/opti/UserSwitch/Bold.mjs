var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M213,174.26A12,12,0,0,0,196.24,177q-1.47,2.06-3.05,4a76,76,0,0,0-30-28.37,48,48,0,1,0-70.28.08,76.8,76.8,0,0,0-30.06,28.25,83.62,83.62,0,0,1-18.3-43.55,12,12,0,0,0,16-17.88l-20-20a12,12,0,0,0-17,0l-20,20a12,12,0,0,0,16.83,17.1,107.88,107.88,0,0,0,37.72,73.61,12.33,12.33,0,0,0,1.88,1.57,107.82,107.82,0,0,0,136.47-.26,13.09,13.09,0,0,0,1.28-1.06,107.66,107.66,0,0,0,18-19.46A12,12,0,0,0,213,174.26ZM128,96a24,24,0,1,1-24,24A24,24,0,0,1,128,96Zm0,116a83.52,83.52,0,0,1-46.94-14.37,52,52,0,0,1,93.88,0A84.07,84.07,0,0,1,128,212Zm124.49-75.51-20,20a12,12,0,0,1-17,0l-20-20a12,12,0,0,1,16-17.88A84,84,0,0,0,59.74,79,12,12,0,1,1,40.26,65a108,108,0,0,1,195.4,54.4,12,12,0,0,1,16.83,17.1Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
