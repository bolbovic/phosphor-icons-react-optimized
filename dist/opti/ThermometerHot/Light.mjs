var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const d = M((m, e) => {
  var c = m, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ f.createElement(V, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M126,154.6V48a6,6,0,0,0-12,0V154.6a30,30,0,1,0,12,0ZM120,202a18,18,0,1,1,18-18A18,18,0,0,1,120,202Zm38-67V48a38,38,0,0,0-76,0v87a62,62,0,1,0,76,0Zm-38,99a50,50,0,0,1-28.57-91A6,6,0,0,0,94,138V48a26,26,0,0,1,52,0v90a6,6,0,0,0,2.57,4.92A50,50,0,0,1,120,234ZM179,79.68a6,6,0,0,1,1.75-8.3c14.14-9.21,24.95-4.61,33.63-.9,7.9,3.37,13.6,5.8,22.37.09a6,6,0,1,1,6.55,10.05c-6.12,4-11.62,5.39-16.59,5.39-6.51,0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09A6,6,0,0,1,179,79.68ZM245,104.32a6,6,0,0,1-1.76,8.3c-6.12,4-11.62,5.39-16.59,5.39-6.51,0-12.11-2.39-17-4.49-7.89-3.37-13.59-5.8-22.37-.09a6,6,0,0,1-6.55-10.05c14.14-9.21,24.95-4.6,33.63-.9,7.9,3.37,13.6,5.8,22.37.09A6,6,0,0,1,245,104.32Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
