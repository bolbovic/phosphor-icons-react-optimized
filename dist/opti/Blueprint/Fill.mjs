var V = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && h(a, e, t[e]);
  if (v)
    for (var e of v(t))
      l.call(t, e) && h(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && v)
    for (var r of v(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var H = r, { children: a } = H, t = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M136,120h24v16H136ZM240,64V200a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A32,32,0,0,1,48,32H64a8,8,0,0,1,8,8V56H232A8,8,0,0,1,240,64ZM56,48H48A16,16,0,0,0,32,64v84.29A31.82,31.82,0,0,1,48,144h8Zm120,88V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16H104a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
