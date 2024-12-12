var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && Z(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    r.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import o, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const f = M((l, e) => {
  var L = l, { children: a } = L, t = n(L, ["children"]);
  return /* @__PURE__ */ o.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M128,84,76,120,24,84,76,48Zm104,0L180,48,128,84l52,36ZM24,156l52,36,52-36L76,120Zm104,0,52,36,52-36-52-36Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M236.55,149.42,194.05,120l42.5-29.42a8,8,0,0,0,0-13.16l-52-36a8,8,0,0,0-9.1,0L128,74.27,80.55,41.42a8,8,0,0,0-9.1,0l-52,36a8,8,0,0,0,0,13.16L62,120l-42.5,29.42a8,8,0,0,0,0,13.16l52,36a8,8,0,0,0,9.1,0L128,165.73l47.45,32.85a8,8,0,0,0,9.1,0l52-36a8,8,0,0,0,0-13.16ZM180,57.73,218,84,180,110.27,142.05,84ZM38.05,84,76,57.73,114,84,76,110.27Zm38,98.27L38.05,156l38-26.27L114,156Zm14-62.27,38-26.27L166,120,128,146.27Zm90,62.27L142.05,156,180,129.73,218,156Zm-21.53,24.64a8,8,0,0,1-2,11.13l-23.89,16.54a8,8,0,0,1-9.1,0L99.56,218a8,8,0,0,1,9.1-13.16L128,218.27l19.34-13.39A8,8,0,0,1,158.47,206.91Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
