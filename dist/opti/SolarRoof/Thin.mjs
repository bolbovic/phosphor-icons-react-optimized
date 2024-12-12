var n = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var Z = (e, m, l) => m in e ? n(e, m, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[m] = l, o = (e, m) => {
  for (var l in m || (m = {}))
    H.call(m, l) && Z(e, l, m[l]);
  if (t)
    for (var l of t(m))
      h.call(m, l) && Z(e, l, m[l]);
  return e;
};
var i = (e, m) => {
  var l = {};
  for (var a in e)
    H.call(e, a) && m.indexOf(a) < 0 && (l[a] = e[a]);
  if (e != null && t)
    for (var a of t(e))
      m.indexOf(a) < 0 && h.call(e, a) && (l[a] = e[a]);
  return l;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((a, l) => {
  var r = a, { children: e } = r, m = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: l }, m), e, /* @__PURE__ */ p.createElement("path", { d: "M243.58,126.21l-40-80A4,4,0,0,0,200,44H56a4,4,0,0,0-3.58,2.21l-40,80A4,4,0,0,0,12,128v56a12,12,0,0,0,12,12H232a12,12,0,0,0,12-12V128A4,4,0,0,0,243.58,126.21ZM98.47,124l-16-32h39.06l16,32Zm3.06-72,16,32H78.47l-16-32Zm48,0,16,32H126.47l-16-32Zm-3.06,72-16-32h39.06l16,32Zm48,0-16-32h39.06l16,32Zm19.06-40H174.47l-16-32h39.06ZM20,184V128.94l36-72,36,72V188H24A4,4,0,0,1,20,184Zm212,4H100V132H236v52A4,4,0,0,1,232,188Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
