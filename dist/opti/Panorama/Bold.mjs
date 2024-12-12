var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    c.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && m(a, e, l[e]);
  return a;
};
var s = (a, l) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const A = f((t, e) => {
  var r = t, { children: a } = r, l = s(r, ["children"]);
  return /* @__PURE__ */ V.createElement(i, d({ ref: e }, l), a, /* @__PURE__ */ V.createElement("path", { d: "M244.18,48.15a19.82,19.82,0,0,0-17.32-3.46l-3.49.94C204.74,50.65,170.08,60,128,60S51.26,50.65,32.63,45.63l-3.49-.94A20,20,0,0,0,4,64V192a20,20,0,0,0,19.94,20,20.42,20.42,0,0,0,5.23-.69l3.19-.87C51,205.39,85.7,196,128,196s77,9.4,95.64,14.45l3.19.87A20,20,0,0,0,252,192V64A19.85,19.85,0,0,0,244.18,48.15ZM128,84c44,0,81.14-9.69,100-14.77V177.08l-51.23-51.22a20,20,0,0,0-28.28,0L131.31,143,90.14,101.86a20,20,0,0,0-28.28,0L28,135.71V69.23C46.86,74.31,84,84,128,84Zm20.28,76,14.35-14.35,33.46,33.46c-10.09-2-21.52-3.93-33.94-5.25ZM28,186.76V169.65l48-48L126.35,172C83.12,172.24,46.74,181.7,28,186.76ZM184,108a16,16,0,1,1,16,16A16,16,0,0,1,184,108Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
