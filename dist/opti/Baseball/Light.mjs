var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && m)
    for (var c of m(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((c, e) => {
  var r = c, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ f.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm67.31,161.67c-1-1.12-2-2.26-2.9-3.42a6,6,0,0,0-9.36,7.5c1.19,1.49,2.43,2.94,3.71,4.37a89.84,89.84,0,0,1-117.52,0c1.28-1.43,2.52-2.88,3.71-4.37a6,6,0,0,0-9.36-7.5c-.93,1.16-1.91,2.3-2.9,3.42a89.8,89.8,0,0,1,0-119.34c1,1.12,2,2.26,2.9,3.42A6,6,0,0,0,68.28,74,6,6,0,0,0,73,64.25c-1.19-1.49-2.43-2.94-3.71-4.37a89.84,89.84,0,0,1,117.52,0c-1.28,1.43-2.52,2.88-3.71,4.37a6,6,0,1,0,9.36,7.5c.93-1.16,1.91-2.3,2.9-3.42a89.8,89.8,0,0,1,0,119.34ZM93.92,145a101.43,101.43,0,0,1-4.4,17,6,6,0,1,1-11.31-4,89.91,89.91,0,0,0,3.87-15,6,6,0,1,1,11.84,2Zm0-34A6,6,0,0,1,89,117.92a6.74,6.74,0,0,1-1,.08,6,6,0,0,1-5.91-5,89.91,89.91,0,0,0-3.87-15,6,6,0,1,1,11.31-4A101.43,101.43,0,0,1,93.92,111Zm83.87,47a6,6,0,1,1-11.31,4,101.43,101.43,0,0,1-4.4-17,6,6,0,1,1,11.84-2A89.91,89.91,0,0,0,177.79,158Zm0-60a89.91,89.91,0,0,0-3.87,15,6,6,0,0,1-5.91,5,6.74,6.74,0,0,1-1-.08,6,6,0,0,1-4.93-6.91,101.43,101.43,0,0,1,4.4-17,6,6,0,1,1,11.31,4Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
