var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const v = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M204.37,51.6A108.08,108.08,0,1,0,236,128,108.09,108.09,0,0,0,204.37,51.6ZM92,200a12,12,0,1,1,24,0v11.11a83.78,83.78,0,0,1-24-7.22Zm48,0a12,12,0,1,1,24,0v3.89a83.78,83.78,0,0,1-24,7.22Zm-33.86-52h43.72l7.57,16.42A35.95,35.95,0,0,0,128,173.22a35.95,35.95,0,0,0-29.43-8.79Zm11.08-24L128,100.62,138.78,124ZM188,186.79V176a12.15,12.15,0,0,0-1.1-5l-48-104a12,12,0,0,0-21.8,0L69.1,171a12.15,12.15,0,0,0-1.1,5v10.77a84,84,0,1,1,120,0Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
