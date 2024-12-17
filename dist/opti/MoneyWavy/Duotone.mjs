var A = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, M = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (c)
    for (var e of c(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && c)
    for (var o of c(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const f = V((o, e) => {
  var r = o, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, M({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M16,69.21v120c91.64-44.77,132.36,42.35,224-2.42v-120C148.36,111.56,107.64,24.44,16,69.21ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
