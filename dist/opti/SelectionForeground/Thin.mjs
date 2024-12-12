var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var v = (a, h, e) => h in a ? i(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, A = (a, h) => {
  for (var e in h || (h = {}))
    V.call(h, e) && v(a, e, h[e]);
  if (m)
    for (var e of m(h))
      o.call(h, e) && v(a, e, h[e]);
  return a;
};
var H = (a, h) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      h.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as p } from "react";
import n from "../../lib/OptiBase.mjs";
const c = p((t, e) => {
  var r = t, { children: a } = r, h = H(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(n, A({ ref: e }, h), a, /* @__PURE__ */ Z.createElement("path", { d: "M60,216a4,4,0,0,1-4,4H48a12,12,0,0,1-12-12v-8a4,4,0,0,1,8,0v8a4,4,0,0,0,4,4h8A4,4,0,0,1,60,216Zm52-4H96a4,4,0,0,0,0,8h16a4,4,0,0,0,0-8ZM40,164a4,4,0,0,0,4-4V144a4,4,0,0,0-8,0v16A4,4,0,0,0,40,164Zm128,32a4,4,0,0,0-4,4v8a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12v-8A4,4,0,0,0,168,196Zm0-88a4,4,0,0,0,4-4V96a12,12,0,0,0-12-12h-8a4,4,0,0,0,0,8h8a4,4,0,0,1,4,4v8A4,4,0,0,0,168,108ZM56,84H48A12,12,0,0,0,36,96v8a4,4,0,0,0,8,0V96a4,4,0,0,1,4-4h8a4,4,0,0,0,0-8ZM208,36H96A12,12,0,0,0,84,48V88h0a4,4,0,0,0,4,4h24a4,4,0,0,0,0-8H92V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4V160a4,4,0,0,1-4,4H172V144a4,4,0,0,0-8,0v24a4,4,0,0,0,3.51,3.95,2.17,2.17,0,0,0,.49.05h40a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
