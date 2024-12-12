var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const v = f((m, e) => {
  var V = m, { children: a } = V, t = l(V, ["children"]);
  return /* @__PURE__ */ n.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M217.15,52.17l-70.34-21.1,39-19.49a4,4,0,1,0-3.58-7.16L135,28a76.07,76.07,0,0,0-75,76V208a4,4,0,0,0,8,0V172H92v60a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V104a44.06,44.06,0,0,0-40-43.81V37.38l74.85,22.45A3.82,3.82,0,0,0,216,60a4,4,0,0,0,1.15-7.83ZM68,164V104a68.08,68.08,0,0,1,64-67.87V60.19A44.06,44.06,0,0,0,92,104v60Zm100,72H104a4,4,0,0,1-4-4V172h72v60A4,4,0,0,1,168,236Zm4-132v60H100V104a36,36,0,0,1,72,0Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
