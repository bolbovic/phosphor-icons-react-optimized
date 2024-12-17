var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && V(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M188,49.68V32a20,20,0,0,0-20-20H88A20,20,0,0,0,68,32V49.68A44.06,44.06,0,0,0,36,92V200a44.05,44.05,0,0,0,44,44h96a44.05,44.05,0,0,0,44-44V92A44.06,44.06,0,0,0,188,49.68ZM164,48H140V36h24ZM116,36V48H92V36Zm80,164a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V92A20,20,0,0,1,80,72h96a20,20,0,0,1,20,20Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
