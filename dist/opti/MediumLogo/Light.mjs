var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ f.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M72,66a62,62,0,1,0,62,62A62.07,62.07,0,0,0,72,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,72,178ZM184,66c-17.1,0-30,26.65-30,62s12.9,62,30,62,30-26.65,30-62S201.1,66,184,66Zm0,112c-7.34,0-18-19.48-18-50s10.66-50,18-50,18,19.48,18,50S191.34,178,184,178ZM246,72V184a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
