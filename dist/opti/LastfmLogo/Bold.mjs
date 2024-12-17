var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ h.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M252,160a44.05,44.05,0,0,1-44,44H190.57a60.2,60.2,0,0,1-54.37-34.63l-30.15-64.59A36.13,36.13,0,0,0,73.43,84H64a36,36,0,0,0-36,36v24a36,36,0,0,0,36,36h8a28,28,0,0,0,25.68-16.8,12,12,0,1,1,22,9.6A52,52,0,0,1,72,204H64A60.07,60.07,0,0,1,4,144V120A60.07,60.07,0,0,1,64,60h9.43A60.2,60.2,0,0,1,127.8,94.63L158,159.22A36.13,36.13,0,0,0,190.57,180H208a20,20,0,0,0,0-40H188a40,40,0,0,1,0-80h20a36,36,0,0,1,36,36,12,12,0,0,1-24,0,12,12,0,0,0-12-12H188a16,16,0,0,0,0,32h20A44.05,44.05,0,0,1,252,160Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
