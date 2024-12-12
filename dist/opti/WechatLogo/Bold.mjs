var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((l, e) => {
  var o = l, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M152,144a16,16,0,1,1-16-16A16,16,0,0,1,152,144Zm32-16a16,16,0,1,0,16,16A16,16,0,0,0,184,128Zm59.18,82.35a20,20,0,0,1-24.83,24.83l-23.26-6.84A84,84,0,0,1,83.72,187.11a83.2,83.2,0,0,1-22.82-6.77l-23.25,6.84A20.24,20.24,0,0,1,32,188a20,20,0,0,1-19.19-25.64l6.84-23.26A84,84,0,0,1,172.33,68.91a84,84,0,0,1,64,118.18ZM76.46,160.75A83.94,83.94,0,0,1,145,69.37,60,60,0,0,0,43.08,132.3a12,12,0,0,1,.93,9.06l-6.09,20.72L58.64,156a12,12,0,0,1,9.06.93A60.08,60.08,0,0,0,76.46,160.75ZM220,152a60,60,0,1,0-31.7,52.92,12,12,0,0,1,9.06-.93l20.72,6.09L212,189.36a12,12,0,0,1,.93-9.06A60.09,60.09,0,0,0,220,152Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
