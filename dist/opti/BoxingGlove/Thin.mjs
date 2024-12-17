var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as H } from "react";
import f from "../../lib/OptiBase.mjs";
const h = H((l, e) => {
  var r = l, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ c.createElement(f, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M168,20H120A52.06,52.06,0,0,0,68,72v4H56a28,28,0,0,0-28,28v29.19a12,12,0,0,0,2.63,7.5c.1.12.2.24.31.35L68,177.67V216a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V176.56l15.54-54.38a12.34,12.34,0,0,0,.46-3.3V72A52.06,52.06,0,0,0,168,20Zm44,98.88a4.11,4.11,0,0,1-.15,1.1l-15.7,54.92A4.11,4.11,0,0,0,196,176v40a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V176a4,4,0,0,0-1.19-2.84L36.76,135.54a4,4,0,0,1-.76-2.35V104A20,20,0,0,1,56,84H68v20a4,4,0,0,0,8,0V72a44.05,44.05,0,0,1,44-44h48a44.05,44.05,0,0,1,44,44Zm-42.21,44.7L145,176l24.84,12.42a4,4,0,0,1-3.58,7.16L136,180.47l-30.21,15.11a4,4,0,1,1-3.58-7.16L127.05,176l-24.84-12.42a4,4,0,1,1,3.58-7.16L136,171.53l30.21-15.11a4,4,0,0,1,3.58,7.16Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
