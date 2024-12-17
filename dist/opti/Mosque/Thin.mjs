var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as n } from "react";
import Z from "../../lib/OptiBase.mjs";
const f = n((m, e) => {
  var v = m, { children: a } = v, t = i(v, ["children"]);
  return /* @__PURE__ */ p.createElement(Z, V({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M224,132a19.91,19.91,0,0,0-12,4v-8c0-39.63-28.82-58.82-52-74.23-15-10-28-18.66-28-29.77a4,4,0,0,0-8,0c0,11.11-13,19.76-28,29.77C72.82,69.18,44,88.37,44,128v8a20,20,0,0,0-32,16v56a4,4,0,0,0,4,4H80a4,4,0,0,0,4-4V176a12,12,0,0,1,24,0v32a4,4,0,0,0,4,4h32a4,4,0,0,0,4-4V176a12,12,0,0,1,24,0v32a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V152A20,20,0,0,0,224,132ZM100.41,60.43C112,52.71,122.51,45.71,128,37.14c5.49,8.57,16,15.57,27.59,23.29C177.41,75,202,91.34,203.87,124H52.13C54,91.34,78.59,75,100.41,60.43ZM20,152a12,12,0,0,1,24,0v52H20Zm140,4a20,20,0,0,0-20,20v28H116V176a20,20,0,0,0-40,0v28H52V132H204v72H180V176A20,20,0,0,0,160,156Zm76,48H212V152a12,12,0,0,1,24,0Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
