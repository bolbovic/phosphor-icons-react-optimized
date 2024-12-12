var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var v = (a, H, e) => H in a ? l(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, V = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && v(a, e, H[e]);
  if (o)
    for (var e of o(H))
      m.call(H, e) && v(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      H.indexOf(t) < 0 && m.call(a, t) && (e[t] = a[t]);
  return e;
};
import d, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((t, e) => {
  var r = t, { children: a } = r, H = p(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, V({ ref: e }, H), a, /* @__PURE__ */ d.createElement("path", { d: "M232,48H76V40A12,12,0,0,0,64,28H48A36,36,0,0,0,12,64V176a36,36,0,0,0,36,36H232a12,12,0,0,0,12-12V60A12,12,0,0,0,232,48ZM36,64A12,12,0,0,1,48,52h4v88H48a35.59,35.59,0,0,0-12,2.06ZM220,188H48a12,12,0,0,1,0-24H64a12,12,0,0,0,12-12V72H220ZM104,136a12,12,0,0,0,0,24h12v4a12,12,0,0,0,24,0v-4h16v4a12,12,0,0,0,24,0v-4h12a12,12,0,0,0,0-24H180V124h12a12,12,0,0,0,0-24H180V96a12,12,0,0,0-24,0v4H140V96a12,12,0,0,0-24,0v4H104a12,12,0,0,0,0,24h12v12Zm36-12h16v12H140Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
