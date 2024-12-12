var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? Z(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var H = t, { children: a } = H, r = v(H, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, r), a, /* @__PURE__ */ A.createElement("path", { d: "M247.87,30.59a8,8,0,0,0-9.28-6.46l-224,40A8,8,0,0,0,16,80a8.6,8.6,0,0,0,1.42-.12L120,61.55V96H64a32,32,0,0,0-32,32v64a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H136V58.7L241.4,39.88A8,8,0,0,0,247.87,30.59ZM104,160V112h48v48ZM64,112H88v48H48V128A16,16,0,0,1,64,112Zm128,96H64a16,16,0,0,1-16-16V176H208v16A16,16,0,0,1,192,208Zm16-80v32H168V112h24A16,16,0,0,1,208,128Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
