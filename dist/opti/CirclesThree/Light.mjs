var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M170,76a42,42,0,1,0-42,42A42,42,0,0,0,170,76Zm-42,30a30,30,0,1,1,30-30A30,30,0,0,1,128,106Zm60,24a42,42,0,1,0,42,42A42,42,0,0,0,188,130Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,188,202ZM68,130a42,42,0,1,0,42,42A42,42,0,0,0,68,130Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,68,202Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
