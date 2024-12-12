var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((m, e) => {
  var H = m, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ L.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M224,44H168a4,4,0,0,0-2.94,1.29L70.25,148H32a12,12,0,0,0-12,12v40a12,12,0,0,0,12,12H88a4,4,0,0,0,2.94-1.29L185.75,108H224a12,12,0,0,0,12-12V56A12,12,0,0,0,224,44Zm4,52a4,4,0,0,1-4,4H184a4,4,0,0,0-2.94,1.29L86.25,204H32a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4H72a4,4,0,0,0,2.94-1.29L169.75,52H224a4,4,0,0,1,4,4Zm-1.17,77.17a4,4,0,0,1-5.66,5.66L204,161.66V208a4,4,0,0,1-8,0V161.66l-17.17,17.17a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
