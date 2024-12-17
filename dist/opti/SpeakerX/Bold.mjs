var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && L.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((l, e) => {
  var o = l, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(H, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M157.27,21.22a12,12,0,0,0-12.64,1.31L75.88,76H32A20,20,0,0,0,12,96v64a20,20,0,0,0,20,20H75.88l68.75,53.47A12,12,0,0,0,164,224V32A12,12,0,0,0,157.27,21.22ZM36,100H68v56H36Zm104,99.47L92,162.12V93.88l48-37.34Zm108.49-55.95a12,12,0,0,1-17,17L216,145l-15.51,15.52a12,12,0,0,1-17-17L199,128l-15.52-15.51a12,12,0,0,1,17-17L216,111l15.51-15.51a12,12,0,0,1,17,17L233,128Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
