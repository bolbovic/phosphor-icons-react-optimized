var A = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && r(a, e, t[e]);
  if (h)
    for (var e of h(t))
      H.call(t, e) && r(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    v.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const c = V((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ p.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M200,164v8h12a12,12,0,0,1,0,24H200v12a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24ZM92,172a32,32,0,0,1-32,32H56v4a12,12,0,0,1-24,0V152a12,12,0,0,1,12-12H60A32,32,0,0,1,92,172Zm-24,0a8,8,0,0,0-8-8H56v16h4A8,8,0,0,0,68,172Zm100,8a40,40,0,0,1-40,40H112a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12h16A40,40,0,0,1,168,180Zm-24,0a16,16,0,0,0-16-16h-4v32h4A16,16,0,0,0,144,180ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,57V80h23Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
