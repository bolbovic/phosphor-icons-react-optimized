var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && Z(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && Z(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const d = M((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M200.12,55.88A102,102,0,1,0,55.88,200.13,102,102,0,1,0,200.12,55.88ZM90,209.62a89.61,89.61,0,0,1-21.23-13.89L90,174.49Zm32,8.16a90,90,0,0,1-20-3.58V162.49l20-20Zm32-3.58a89.8,89.8,0,0,1-20,3.58V130.49l20-20Zm32-17.4a89.45,89.45,0,0,1-20,12.83V98.49l20-20ZM60.27,187.24a90,90,0,0,1,127-127ZM198,184.57V71.43a90,90,0,0,1,0,113.14Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
