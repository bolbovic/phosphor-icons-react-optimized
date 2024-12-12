var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, V = (a, r) => {
  for (var e in r || (r = {}))
    L.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    L.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, V({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M168,16H120A56.06,56.06,0,0,0,64,72H56a32,32,0,0,0-32,32v29.19a16.09,16.09,0,0,0,3.51,10,8,8,0,0,0,.62.69L64,179.34V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V177.12l15.38-53.85a15.89,15.89,0,0,0,.62-4.39V72A56.06,56.06,0,0,0,168,16Zm40,102.88L192.31,173.8A7.85,7.85,0,0,0,192,176v40H80V176a8,8,0,0,0-2.38-5.69L40,133.12V104A16,16,0,0,1,56,88h8v16a8,8,0,0,0,16,0V72a40,40,0,0,1,40-40h48a40,40,0,0,1,40,40Zm-36.42,48.28L153.89,176l17.69,8.84a8,8,0,0,1-7.16,14.32L136,184.94l-28.42,14.22a8,8,0,1,1-7.16-14.32L118.11,176l-17.69-8.84a8,8,0,1,1,7.16-14.32L136,167.06l28.42-14.22a8,8,0,1,1,7.16,14.32Z" }));
});
H.displayName = "Regular";
export {
  H as Regular
};
