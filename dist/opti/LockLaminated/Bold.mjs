var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    V.call(t, a) && H(e, a, t[a]);
  if (o)
    for (var a of o(t))
      p.call(t, a) && H(e, a, t[a]);
  return e;
};
var l = (e, t) => {
  var a = {};
  for (var m in e)
    V.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, a) => {
  var r = m, { children: e } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM52,144H204v16H52Zm48-88a28,28,0,0,1,56,0V76H100Zm104,44v20H52V100ZM52,204V184H204v20Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
