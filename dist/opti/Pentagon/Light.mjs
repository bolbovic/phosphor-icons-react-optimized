var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    s.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    s.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224.35,89.15,136.41,20.82l-.13-.1a14,14,0,0,0-16.56,0l-.13.1L31.65,89.15a14,14,0,0,0-5,15.45l32,107.56c0,.05,0,.09,0,.13A14,14,0,0,0,72,222H184a14,14,0,0,0,13.33-9.71s0-.08,0-.13l32-107.56A14,14,0,0,0,224.35,89.15ZM217.9,101s0,.08,0,.12l-32,107.54A2,2,0,0,1,184,210H72a2,2,0,0,1-1.89-1.34l-32-107.54s0-.08,0-.12a2,2,0,0,1,.72-2.23l.13-.1,87.91-68.3a2,2,0,0,1,2.28,0l87.91,68.3.13.1A2,2,0,0,1,217.9,101Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
