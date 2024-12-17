var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(A, L({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M174,148a10,10,0,1,1-10-10A10,10,0,0,1,174,148ZM92,138a10,10,0,1,0,10,10A10,10,0,0,0,92,138Zm146,22v24a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V161.13A111.44,111.44,0,0,1,54.28,78.76L27.76,52.24a6,6,0,1,1,8.48-8.48L63.61,71.12a108.59,108.59,0,0,1,64-21.12H128a109.17,109.17,0,0,1,64.58,20.93l27.18-27.17a6,6,0,0,1,8.48,8.48L201.93,78.55c1.26,1.15,2.5,2.32,3.72,3.53A109.29,109.29,0,0,1,238,160Zm-12,0a98,98,0,0,0-98-98h-.35C73.81,62.19,30,106.66,30,161.13V184a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
