var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const H = n((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M92,224a20,20,0,1,1-20-20A20,20,0,0,1,92,224Zm124-20a20,20,0,1,0,20,20A20,20,0,0,0,216,204Zm24-36H60V75.31a19.86,19.86,0,0,0-5.86-14.14L32.49,39.51a12,12,0,0,0-17,17L36,77v91H32a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
