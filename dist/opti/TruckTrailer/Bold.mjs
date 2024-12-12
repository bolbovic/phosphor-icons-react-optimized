var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && r(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var A in a)
    p.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && Z.call(a, A) && (e[A] = a[A]);
  return e;
};
import V, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((A, e) => {
  var o = A, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ V.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M224,93.65A60.08,60.08,0,0,0,164,36a20,20,0,0,0-20,20V172H128V72a12,12,0,0,0-12-12H20A20,20,0,0,0,0,80V184a36,36,0,0,0,60,26.8A36,36,0,0,0,117.94,196h68.12A36,36,0,0,0,256,184V136A44.08,44.08,0,0,0,224,93.65ZM168,60.22A36.06,36.06,0,0,1,200,96v8a12,12,0,0,0,12,12,20,20,0,0,1,20,20v14.06A36,36,0,0,0,186.06,172H168ZM104,84v70.08a35.92,35.92,0,0,0-44,3.12,35.93,35.93,0,0,0-36-7.14V84ZM36,196a12,12,0,1,1,12-12A12,12,0,0,1,36,196Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,84,196Zm136,0a12,12,0,1,1,12-12A12,12,0,0,1,220,196Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
