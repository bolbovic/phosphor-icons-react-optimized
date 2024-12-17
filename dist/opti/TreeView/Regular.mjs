var c = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && m(a, e, r[e]);
  if (h)
    for (var e of h(r))
      o.call(r, e) && m(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var H = t, { children: a } = H, r = v(H, ["children"]);
  return /* @__PURE__ */ l.createElement(i, p({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M176,152h32a16,16,0,0,0,16-16V104a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H88V80h8a16,16,0,0,0,16-16V32A16,16,0,0,0,96,16H64A16,16,0,0,0,48,32V64A16,16,0,0,0,64,80h8V192a24,24,0,0,0,24,24h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V192a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96a8,8,0,0,1-8-8V128h72v8A16,16,0,0,0,176,152ZM64,32H96V64H64ZM176,192h32v32H176Zm0-88h32v32H176Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
