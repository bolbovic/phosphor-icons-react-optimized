var l = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M96,156H216a20,20,0,0,0,20-20V76a20,20,0,0,0-20-20H192V40a20,20,0,0,0-20-20H140a20,20,0,0,0-20,20V56H96A20,20,0,0,0,76,76v60A20,20,0,0,0,96,156ZM144,44h24V56H144ZM100,80H212v52H100ZM92,224a20,20,0,1,1-20-20A20,20,0,0,1,92,224Zm144,0a20,20,0,1,1-20-20A20,20,0,0,1,236,224Zm16-44a12,12,0,0,1-12,12H32a12,12,0,0,1,0-24h4V77L15.51,56.49a12,12,0,0,1,17-17L54.14,61.17A19.86,19.86,0,0,1,60,75.31V168H240A12,12,0,0,1,252,180Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
