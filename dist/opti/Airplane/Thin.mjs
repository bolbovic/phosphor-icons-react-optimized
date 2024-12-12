var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && A(a, e, t[e]);
  if (V)
    for (var e of V(t))
      m.call(t, e) && A(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && V)
    for (var l of V(a))
      t.indexOf(l) < 0 && m.call(a, l) && (e[l] = a[l]);
  return e;
};
import p, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const f = v((l, e) => {
  var r = l, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M233.79,132.42,156,93.53V48a28,28,0,0,0-56,0V93.53L22.21,132.42A4,4,0,0,0,20,136v32a4,4,0,0,0,4.78,3.92l75.22-15v25.46L85.17,197.17A4,4,0,0,0,84,200v32a4,4,0,0,0,5.49,3.71L128,220.31l38.51,15.4A3.87,3.87,0,0,0,168,236a3.94,3.94,0,0,0,2.24-.69A4,4,0,0,0,172,232V200a4,4,0,0,0-1.17-2.83L156,182.34V156.88l75.22,15A4,4,0,0,0,236,168V136A4,4,0,0,0,233.79,132.42ZM228,163.12l-75.22-15A4,4,0,0,0,148,152v32a4,4,0,0,0,1.17,2.83L164,201.66v24.43l-34.51-13.8a4,4,0,0,0-3,0L92,226.09V201.66l14.83-14.83A4,4,0,0,0,108,184V152a4,4,0,0,0-4.78-3.92L28,163.12V138.47l77.79-38.89A4,4,0,0,0,108,96V48a20,20,0,0,1,40,0V96a4,4,0,0,0,2.21,3.58L228,138.47Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
