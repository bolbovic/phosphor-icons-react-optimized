var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((l, e) => {
  var r = l, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M250.83,93.17l-40-40a4,4,0,0,0-5.66,0L168,90.34,130.83,53.17a4,4,0,0,0-5.66,0L88,90.34,50.83,53.17a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0L88,101.66,122.34,136,85.17,173.17a4,4,0,0,0,0,5.66l40,40a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66L133.66,136,168,101.66l37.17,37.17a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,250.83,93.17ZM48,130.34,13.66,96,48,61.66,82.34,96Zm80,80L93.66,176,128,141.66,162.34,176Zm0-80L93.66,96,128,61.66,162.34,96Zm80,0L173.66,96,208,61.66,242.34,96Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
