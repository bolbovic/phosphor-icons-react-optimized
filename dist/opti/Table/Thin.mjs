var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (m)
    for (var a of m(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var H in e)
    i.call(e, H) && t.indexOf(H) < 0 && (a[H] = e[H]);
  if (e != null && m)
    for (var H of m(e))
      t.indexOf(H) < 0 && p.call(e, H) && (a[H] = e[H]);
  return a;
};
import v, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((H, a) => {
  var r = H, { children: e } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ v.createElement(f, Z({ ref: a }, t), e, /* @__PURE__ */ v.createElement("path", { d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52ZM36,108H84v40H36Zm56,0H220v40H92ZM220,60v40H36V60ZM36,192V156H84v40H40A4,4,0,0,1,36,192Zm180,4H92V156H220v36A4,4,0,0,1,216,196Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
