var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      s.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && s.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import n from "../../lib/OptiBase.mjs";
const B = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M68,60a68,68,0,1,0,68,68A68.07,68.07,0,0,0,68,60Zm0,112a44,44,0,1,1,44-44A44.05,44.05,0,0,1,68,172ZM184,60c-23.63,0-36,34.21-36,68s12.37,68,36,68,36-34.21,36-68S207.63,60,184,60Zm0,111.87c-3.74-2.16-12-17.09-12-43.87s8.26-41.71,12-43.87c3.74,2.16,12,17.09,12,43.87S187.74,169.71,184,171.87ZM256,72V184a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
