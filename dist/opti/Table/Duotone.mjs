var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? i(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    Z.call(a, t) && p(e, t, a[t]);
  if (H)
    for (var t of H(a))
      c.call(a, t) && p(e, t, a[t]);
  return e;
};
var V = (e, a) => {
  var t = {};
  for (var o in e)
    Z.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && H)
    for (var o of H(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as v } from "react";
import M from "../../lib/OptiBase.mjs";
const d = v((o, t) => {
  var r = o, { children: e } = r, a = V(r, ["children"]);
  return /* @__PURE__ */ m.createElement(M, n({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M88,104v96H32V104Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
