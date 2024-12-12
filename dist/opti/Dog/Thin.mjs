var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? n(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      h.call(l, e) && o(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, e) => {
  var r = t, { children: a } = r, l = p(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, i({ ref: e }, l), a, /* @__PURE__ */ Z.createElement("path", { d: "M100,140a8,8,0,1,1-8-8A8,8,0,0,1,100,140Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,148Zm64.94-9.11a12.12,12.12,0,0,1-5,1.11,11.83,11.83,0,0,1-9.35-4.62L212,132.09V184a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V132.09l-2.53,3.27A11.88,11.88,0,0,1,32.1,140a12.08,12.08,0,0,1-5-1.11,11.82,11.82,0,0,1-6.84-13.14l16.42-88a12,12,0,0,1,14.7-9.43l.16,0L104.58,44h46.84L204.5,28.4l.16,0a12,12,0,0,1,14.7,9.43l16.42,88A11.81,11.81,0,0,1,228.94,138.89ZM97.25,50.18,49.34,36.1a4.18,4.18,0,0,0-.92-.1,4,4,0,0,0-3.92,3.26l-16.42,88a4,4,0,0,0,7.08,3.22ZM204,121.75,150,52H106L52,121.75V184a28,28,0,0,0,28,28h44V193.66l-14.83-14.83a4,4,0,0,1,5.66-5.66L128,186.34l13.17-13.17a4,4,0,0,1,5.66,5.66L132,193.66V212h44a28,28,0,0,0,28-28Zm23.92,5.48-16.42-88a4,4,0,0,0-4.84-3.16L158.75,50.18l62.11,80.28a4,4,0,0,0,7.06-3.23Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
