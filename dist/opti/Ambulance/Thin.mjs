var p = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    h.call(m, e) && r(a, e, m[e]);
  if (A)
    for (var e of A(m))
      o.call(m, e) && r(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as n } from "react";
import v from "../../lib/OptiBase.mjs";
const c = n((t, e) => {
  var H = t, { children: a } = H, m = Z(H, ["children"]);
  return /* @__PURE__ */ i.createElement(v, V({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M84,120a4,4,0,0,1,4-4h20V96a4,4,0,0,1,8,0v20h20a4,4,0,0,1,0,8H116v20a4,4,0,0,1-8,0V124H88A4,4,0,0,1,84,120Zm168,0v64a12,12,0,0,1-12,12H219.71a28,28,0,0,1-55.42,0H107.71a28,28,0,0,1-55.42,0H32a12,12,0,0,1-12-12V72A12,12,0,0,1,32,60H184a4,4,0,0,1,4,4V76h38.58a12,12,0,0,1,11.15,7.54l14,35A4,4,0,0,1,252,120ZM188,84v32h54.09L230.3,86.51A4,4,0,0,0,226.58,84ZM32,188H52.29a28,28,0,0,1,55.42,0h56.58A28.05,28.05,0,0,1,180,166.71V68H32a4,4,0,0,0-4,4V184A4,4,0,0,0,32,188Zm68,4a20,20,0,1,0-20,20A20,20,0,0,0,100,192Zm112,0a20,20,0,1,0-20,20A20,20,0,0,0,212,192Zm32-8V124H188v40.29A28,28,0,0,1,219.71,188H240A4,4,0,0,0,244,184Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
