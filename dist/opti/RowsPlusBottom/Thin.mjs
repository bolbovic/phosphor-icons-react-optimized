var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import n, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((H, e) => {
  var r = H, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ n.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M208,116H48a12,12,0,0,0-12,12v24a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V128A12,12,0,0,0,208,116Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V128a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM208,44H48A12,12,0,0,0,36,56V80A12,12,0,0,0,48,92H208a12,12,0,0,0,12-12V56A12,12,0,0,0,208,44Zm4,36a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM156,216a4,4,0,0,1-4,4H132v20a4,4,0,0,1-8,0V220H104a4,4,0,0,1,0-8h20V192a4,4,0,0,1,8,0v20h20A4,4,0,0,1,156,216Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
