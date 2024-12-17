var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((m, e) => {
  var l = m, { children: a } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm72-76v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V104a16,16,0,0,1,32,0Zm-36.42,74.21c-.7-1.4-17.5-34.21-51.58-34.21s-50.88,32.81-51.58,34.21a4,4,0,0,0,0,3.58c.7,1.4,17.5,34.21,51.58,34.21s50.88-32.81,51.58-34.21A4,4,0,0,0,179.58,178.21Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
