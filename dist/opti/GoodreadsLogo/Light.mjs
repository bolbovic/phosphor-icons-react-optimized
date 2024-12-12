var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const n = h((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ V.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M184,26a6,6,0,0,0-6,6V51.4A62,62,0,0,0,66,88v24a62,62,0,0,0,112,36.6V168a50.06,50.06,0,0,1-50,50c-17.09,0-34-8.41-43.08-21.43a6,6,0,1,0-9.84,6.86C86.34,219.57,107.11,230,128,230a62.07,62.07,0,0,0,62-62V32A6,6,0,0,0,184,26ZM128,162a50.06,50.06,0,0,1-50-50V88a50,50,0,0,1,100,0v24A50.06,50.06,0,0,1,128,162Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
