var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && p(e, a, t[a]);
  if (o)
    for (var a of o(t))
      A.call(t, a) && p(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var m in e)
    n.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && A.call(e, m) && (a[m] = e[m]);
  return a;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((m, a) => {
  var c = m, { children: e } = c, t = i(c, ["children"]);
  return /* @__PURE__ */ r.createElement(f, Z({ ref: a }, t), e, /* @__PURE__ */ r.createElement("path", { d: "M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40Zm32,88a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm-45.28,87A88,88,0,0,1,49.56,88.14L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175Zm18,.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
