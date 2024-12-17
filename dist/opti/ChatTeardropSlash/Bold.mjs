var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
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
const B = s((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M56.88,31.93A12,12,0,1,0,39.12,48.07L50,60a103.37,103.37,0,0,0-22,64v84a20,20,0,0,0,20,20h84a104.32,104.32,0,0,0,55.87-16.31l11.25,12.38a12,12,0,0,0,17.76-16.14ZM132,204H52V124A79.51,79.51,0,0,1,66.46,78.14l105,115.49A79.08,79.08,0,0,1,132,204Zm104-80a102.9,102.9,0,0,1-10.36,45.29A12,12,0,0,1,204,158.83,79.25,79.25,0,0,0,212,124,80.07,80.07,0,0,0,104.16,49a12,12,0,0,1-8.35-22.5A104.07,104.07,0,0,1,236,124Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
