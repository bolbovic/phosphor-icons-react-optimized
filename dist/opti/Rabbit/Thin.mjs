var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import C, { forwardRef as n } from "react";
import f from "../../lib/OptiBase.mjs";
const s = n((m, e) => {
  var c = m, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ C.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ C.createElement("path", { d: "M108,164a8,8,0,1,1-8-8A8,8,0,0,1,108,164Zm48-8a8,8,0,1,0,8,8A8,8,0,0,0,156,156Zm56,32a48,48,0,0,1-84,31.75,48,48,0,1,1-67.51-68,67.64,67.64,0,0,1,7-22.78C48.85,92.61,36.63,41.7,49.06,21.15a17.92,17.92,0,0,1,16-9.15c12.17,0,23.19,11.41,32.76,33.92C104.53,61.7,109.37,80,112.45,93.79a68.44,68.44,0,0,1,31.1,0c3.08-13.8,7.92-32.09,14.63-47.87C167.75,23.41,178.77,12,190.94,12a17.92,17.92,0,0,1,16,9.15c12.43,20.55.21,71.46-18.4,107.86a67.64,67.64,0,0,1,7,22.78A47.81,47.81,0,0,1,212,188ZM151.23,96.1a67.9,67.9,0,0,1,22.63,13.69,69,69,0,0,1,9.78,11.11c17.88-37.07,25.59-80.5,16.45-95.61A9.91,9.91,0,0,0,190.94,20C176.54,20,161.78,48.37,151.23,96.1ZM72.36,120.9a69,69,0,0,1,9.78-11.11A67.9,67.9,0,0,1,104.77,96.1C94.22,48.37,79.46,20,65.06,20a9.91,9.91,0,0,0-9.15,5.29C46.77,40.4,54.48,83.83,72.36,120.9ZM204,188a39.86,39.86,0,0,0-14.82-31.08,4,4,0,0,1-1.46-2.72,60,60,0,0,0-119.44,0,4,4,0,0,1-1.46,2.72,40,40,0,1,0,55.64,57l-13-10.82a4,4,0,1,1,5.12-6.16L128,208.1l13.44-11.18a4,4,0,0,1,5.12,6.16l-13,10.82A40,40,0,0,0,204,188Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
