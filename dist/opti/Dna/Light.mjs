var H = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ l.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M198,204.5V232a6,6,0,0,1-12,0V204.5a65.64,65.64,0,0,0-36.48-59l-48.4-24.2A77.57,77.57,0,0,1,58,51.5V24a6,6,0,0,1,12,0V51.5a65.64,65.64,0,0,0,36.48,59l48.4,24.2A77.57,77.57,0,0,1,198,204.5ZM160,202H70.05A66,66,0,0,1,74,182h74.13a6,6,0,0,0,0-12H79.77a65.85,65.85,0,0,1,17.16-18.7,6,6,0,0,0-7.1-9.67A78.27,78.27,0,0,0,58,204.5V232a6,6,0,0,0,12,0V214h90a6,6,0,0,0,0-12ZM192,18a6,6,0,0,0-6,6V42H96a6,6,0,0,0,0,12H186A66,66,0,0,1,182,74H107.89a6,6,0,1,0,0,12h68.34a65.85,65.85,0,0,1-17.16,18.7,6,6,0,0,0,7.1,9.67A78.27,78.27,0,0,0,198,51.5V24A6,6,0,0,0,192,18Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
