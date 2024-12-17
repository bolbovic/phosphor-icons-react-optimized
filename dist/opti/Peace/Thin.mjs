var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && i(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && i(e, t, a[t]);
  return e;
};
var Z = (e, a) => {
  var t = {};
  for (var m in e)
    p.call(e, m) && a.indexOf(m) < 0 && (t[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      a.indexOf(m) < 0 && n.call(e, m) && (t[m] = e[m]);
  return t;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const d = l((m, t) => {
  var o = m, { children: e } = o, a = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: t }, a), e, /* @__PURE__ */ c.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.44,91.44,0,0,1-14.44,49.43L132,125.92V36.09A92.11,92.11,0,0,1,220,128ZM124,36.09v89.83L50.44,177.43A92,92,0,0,1,124,36.09ZM55,184l69-48.29v84.23A91.94,91.94,0,0,1,55,184Zm77,35.94V135.68L201,184A91.94,91.94,0,0,1,132,219.91Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
