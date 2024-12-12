var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && A(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((o, e) => {
  var m = o, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ V.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M232,116H198.64A76,76,0,0,0,128,12a12,12,0,0,0-12,12V57.36A76,76,0,0,0,12,128a12,12,0,0,0,12,12H57.36A76,76,0,0,0,128,244a12,12,0,0,0,12-12V198.64A76,76,0,0,0,244,128,12,12,0,0,0,232,116ZM180,88a51.38,51.38,0,0,1-8.18,28H140V37.4A52.09,52.09,0,0,1,180,88ZM88,76a51.38,51.38,0,0,1,28,8.18V116H37.4A52.09,52.09,0,0,1,88,76ZM76,168a51.38,51.38,0,0,1,8.18-28H116v78.6A52.09,52.09,0,0,1,76,168Zm92,12a51.38,51.38,0,0,1-28-8.18V140h78.6A52.09,52.09,0,0,1,168,180Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
