var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const v = s((o, e) => {
  var l = o, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(n, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M188,184a16,16,0,1,1,16-16A16,16,0,0,1,188,184Zm36-68H180a12,12,0,0,0,0,24h40v56H36V140H76a12,12,0,0,0,0-24H32a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V136A20,20,0,0,0,224,116ZM88.49,80.49,116,53v75a12,12,0,0,0,24,0V53l27.51,27.52a12,12,0,1,0,17-17l-48-48a12,12,0,0,0-17,0l-48,48a12,12,0,1,0,17,17Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
