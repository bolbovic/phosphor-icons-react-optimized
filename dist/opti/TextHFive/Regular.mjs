var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var l = r, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ d.createElement(V, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm60,88a38.8,38.8,0,0,0-9.41,1.14L206.78,120H240a8,8,0,0,0,0-16H200a8,8,0,0,0-7.89,6.68l-8,48a8,8,0,0,0,13.6,6.92A19.73,19.73,0,0,1,212,160a20,20,0,0,1,0,40,19.73,19.73,0,0,1-14.29-5.6,8,8,0,1,0-11.42,11.2A35.54,35.54,0,0,0,212,216a36,36,0,0,0,0-72Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
