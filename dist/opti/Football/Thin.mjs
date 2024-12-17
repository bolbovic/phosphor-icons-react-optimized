var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && L(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && L(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import n, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const s = Z((l, e) => {
  var m = l, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ n.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M225.12,54.56a28.94,28.94,0,0,0-23.68-23.68c-31.61-5.36-91.16-7.83-134.78,35.78S25.52,169.83,30.88,201.44a28.94,28.94,0,0,0,23.68,23.68A203.34,203.34,0,0,0,88.25,228c31.3,0,70.19-7.77,101.09-38.66C233,145.72,230.48,86.17,225.12,54.56ZM167.42,35.9a196.29,196.29,0,0,1,32.69,2.86,21,21,0,0,1,17.13,17.13A185.26,185.26,0,0,1,219.56,102L154,36.43C158.33,36.09,162.79,35.9,167.42,35.9ZM55.89,217.24a21,21,0,0,1-17.13-17.13A185.26,185.26,0,0,1,36.44,154L102,219.56A185.26,185.26,0,0,1,55.89,217.24Zm127.79-33.56c-12.22,12.23-35.23,29.34-71.56,34.73L37.59,143.88C43,107.55,60.09,84.54,72.32,72.32S107.56,43,143.89,37.6l74.52,74.52C213,148.45,195.91,171.46,183.68,183.68ZM162.81,93.19a4,4,0,0,1,0,5.65L145.65,116l9.17,9.16a4,4,0,0,1-5.66,5.66L140,121.66,121.66,140l9.17,9.17a4,4,0,0,1-5.66,5.66L116,145.65,98.84,162.81a4,4,0,1,1-5.65-5.65L110.35,140l-9.17-9.16a4,4,0,1,1,5.66-5.66l9.17,9.17L134.34,116l-9.17-9.17a4,4,0,1,1,5.66-5.66l9.16,9.17,17.17-17.16A4,4,0,0,1,162.81,93.19Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
