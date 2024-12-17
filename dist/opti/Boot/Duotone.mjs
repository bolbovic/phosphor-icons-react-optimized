var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var H in a)
    h.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((H, e) => {
  var c = H, { children: a } = c, t = n(c, ["children"]);
  return /* @__PURE__ */ r.createElement(f, l({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M32,168c9.22-32.06,12-88.65,0-120H144a8,8,0,0,1,8,8v64h40a48,48,0,0,1,48,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M192,112H160V56a16,16,0,0,0-16-16H32a8,8,0,0,0-7.47,10.86c11.06,28.84,8.76,83.71-.22,114.93A8.25,8.25,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56.06,56.06,0,0,0,192,112ZM144,56V80H112a8,8,0,0,0,0,16h32v16H112a8,8,0,0,0,0,16h80a40.07,40.07,0,0,1,39.2,32H42.25c6.74-30.84,8.16-74.17.61-104Zm61.89,144-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232v24Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
