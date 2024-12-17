var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, V, e) => V in a ? Z(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, o = (a, V) => {
  for (var e in V || (V = {}))
    r.call(V, e) && m(a, e, V[e]);
  if (t)
    for (var e of t(V))
      H.call(V, e) && m(a, e, V[e]);
  return a;
};
var i = (a, V) => {
  var e = {};
  for (var h in a)
    r.call(a, h) && V.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && t)
    for (var h of t(a))
      V.indexOf(h) < 0 && H.call(a, h) && (e[h] = a[h]);
  return e;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((h, e) => {
  var v = h, { children: a } = v, V = i(v, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, V), a, /* @__PURE__ */ p.createElement("path", { d: "M232,60H24A12,12,0,0,0,12,72V200a4,4,0,0,0,8,0V180H44v20a4,4,0,0,0,8,0V180H76v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V72A12,12,0,0,0,232,60ZM20,72a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4V172H20Zm92,76a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4ZM52,100h56v40H52Zm92,48h64a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H144a4,4,0,0,0-4,4v48A4,4,0,0,0,144,148Zm4-48h56v40H148Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
