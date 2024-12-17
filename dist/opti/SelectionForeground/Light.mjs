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
import c from "../../lib/OptiBase.mjs";
const f = p((t, e) => {
  var r = t, { children: a } = r, h = H(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(c, A({ ref: e }, h), a, /* @__PURE__ */ Z.createElement("path", { d: "M62,216a6,6,0,0,1-6,6H48a14,14,0,0,1-14-14v-8a6,6,0,0,1,12,0v8a2,2,0,0,0,2,2h8A6,6,0,0,1,62,216Zm50-6H96a6,6,0,0,0,0,12h16a6,6,0,0,0,0-12ZM40,166a6,6,0,0,0,6-6V144a6,6,0,0,0-12,0v16A6,6,0,0,0,40,166Zm128,28a6,6,0,0,0-6,6v8a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14v-8A6,6,0,0,0,168,194Zm0-84a6,6,0,0,0,6-6V96a14,14,0,0,0-14-14h-8a6,6,0,0,0,0,12h8a2,2,0,0,1,2,2v8A6,6,0,0,0,168,110ZM56,82H48A14,14,0,0,0,34,96v8a6,6,0,0,0,12,0V96a2,2,0,0,1,2-2h8a6,6,0,0,0,0-12ZM208,34H96A14,14,0,0,0,82,48V88h0a6,6,0,0,0,6,6h24a6,6,0,0,0,0-12H94V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2V160a2,2,0,0,1-2,2H174V144a6,6,0,0,0-12,0v24a6,6,0,0,0,6,6h40a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
