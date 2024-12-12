var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, l = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (H)
    for (var a of H(r))
      Z.call(r, a) && o(e, a, r[a]);
  return e;
};
var V = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && H)
    for (var t of H(e))
      r.indexOf(t) < 0 && Z.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((t, a) => {
  var m = t, { children: e } = m, r = V(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: a }, r), e, /* @__PURE__ */ c.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
