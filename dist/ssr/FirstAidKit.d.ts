import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZIMTc2VjQ4YTI0LDI0LDAsMCwwLTI0LTI0SDEwNEEyNCwyNCwwLDAsMCw4MCw0OHY4SDQwQTE2LDE2LDAsMCwwLDI0LDcyVjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBMTYsMTYsMCwwLDAsMjE2LDU2Wk05Niw0OGE4LDgsMCwwLDEsOC04aDQ4YTgsOCwwLDAsMSw4LDh2OEg5NlpNMjE2LDIwMEg0MFY3MkgyMTZWMjAwWm0tNTYtNjRhOCw4LDAsMCwxLTgsOEgxMzZ2MTZhOCw4LDAsMCwxLTE2LDBWMTQ0SDEwNGE4LDgsMCwwLDEsMC0xNmgxNlYxMTJhOCw4LDAsMCwxLDE2LDB2MTZoMTZBOCw4LDAsMCwxLDE2MCwxMzZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjBIMTcyVjQ4YTIwLDIwLDAsMCwwLTIwLTIwSDEwNEEyMCwyMCwwLDAsMCw4NCw0OFY2MEg0MEExMiwxMiwwLDAsMCwyOCw3MlYyMDBhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjcyQTEyLDEyLDAsMCwwLDIxNiw2MFpNOTIsNDhhMTIsMTIsMCwwLDEsMTItMTJoNDhhMTIsMTIsMCwwLDEsMTIsMTJWNjBIOTJaTTIyMCwyMDBhNCw0LDAsMCwxLTQsNEg0MGE0LDQsMCwwLDEtNC00VjcyYTQsNCwwLDAsMSw0LTRIMjE2YTQsNCwwLDAsMSw0LDRabS02NC02NGE0LDQsMCwwLDEtNCw0SDEzMnYyMGE0LDQsMCwwLDEtOCwwVjE0MEgxMDRhNCw0LDAsMCwxLDAtOGgyMFYxMTJhNCw0LDAsMCwxLDgsMHYyMGgyMEE0LDQsMCwwLDEsMTU2LDEzNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNThIMTc0VjQ4YTIyLDIyLDAsMCwwLTIyLTIySDEwNEEyMiwyMiwwLDAsMCw4Miw0OFY1OEg0MEExNCwxNCwwLDAsMCwyNiw3MlYyMDBhMTQsMTQsMCwwLDAsMTQsMTRIMjE2YTE0LDE0LDAsMCwwLDE0LTE0VjcyQTE0LDE0LDAsMCwwLDIxNiw1OFpNOTQsNDhhMTAsMTAsMCwwLDEsMTAtMTBoNDhhMTAsMTAsMCwwLDEsMTAsMTBWNThIOTRaTTIxOCwyMDBhMiwyLDAsMCwxLTIsMkg0MGEyLDIsMCwwLDEtMi0yVjcyYTIsMiwwLDAsMSwyLTJIMjE2YTIsMiwwLDAsMSwyLDJabS02MC02NGE2LDYsMCwwLDEtNiw2SDEzNHYxOGE2LDYsMCwwLDEtMTIsMFYxNDJIMTA0YTYsNiwwLDAsMSwwLTEyaDE4VjExMmE2LDYsMCwwLDEsMTIsMHYxOGgxOEE2LDYsMCwwLDEsMTU4LDEzNloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTJIMTgwVjQ0YTI4LDI4LDAsMCwwLTI4LTI4SDEwNEEyOCwyOCwwLDAsMCw3Niw0NHY4SDQwQTIwLDIwLDAsMCwwLDIwLDcyVjIwMGEyMCwyMCwwLDAsMCwyMCwyMEgyMTZhMjAsMjAsMCwwLDAsMjAtMjBWNzJBMjAsMjAsMCwwLDAsMjE2LDUyWk0xMDAsNDRhNCw0LDAsMCwxLDQtNGg0OGE0LDQsMCwwLDEsNCw0djhIMTAwWk0yMTIsMTk2SDQ0Vjc2SDIxMlptLTQ4LTYwYTEyLDEyLDAsMCwxLTEyLDEySDE0MHYxMmExMiwxMiwwLDAsMS0yNCwwVjE0OEgxMDRhMTIsMTIsMCwwLDEsMC0yNGgxMlYxMTJhMTIsMTIsMCwwLDEsMjQsMHYxMmgxMkExMiwxMiwwLDAsMSwxNjQsMTM2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZIMTc2VjQ4YTI0LDI0LDAsMCwwLTI0LTI0SDEwNEEyNCwyNCwwLDAsMCw4MCw0OHY4SDQwQTE2LDE2LDAsMCwwLDI0LDcyVjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWNzJBMTYsMTYsMCwwLDAsMjE2LDU2Wm0tNjQsODhIMTM2djE2YTgsOCwwLDAsMS0xNiwwVjE0NEgxMDRhOCw4LDAsMCwxLDAtMTZoMTZWMTEyYTgsOCwwLDAsMSwxNiwwdjE2aDE2YTgsOCwwLDAsMSwwLDE2Wm04LTg4SDk2VjQ4YTgsOCwwLDAsMSw4LThoNDhhOCw4LDAsMCwxLDgsOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNzJWMjAwYTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04SDIxNkE4LDgsMCwwLDEsMjI0LDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw1NkgxNzZWNDhhMjQsMjQsMCwwLDAtMjQtMjRIMTA0QTI0LDI0LDAsMCwwLDgwLDQ4djhINDBBMTYsMTYsMCwwLDAsMjQsNzJWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY3MkExNiwxNiwwLDAsMCwyMTYsNTZaTTk2LDQ4YTgsOCwwLDAsMSw4LThoNDhhOCw4LDAsMCwxLDgsOHY4SDk2Wk0yMTYsMjAwSDQwVjcySDIxNlYyMDBabS01Ni02NGE4LDgsMCwwLDEtOCw4SDEzNnYxNmE4LDgsMCwwLDEtMTYsMFYxNDRIMTA0YTgsOCwwLDAsMSwwLTE2aDE2VjExMmE4LDgsMCwwLDEsMTYsMHYxNmgxNkE4LDgsMCwwLDEsMTYwLDEzNloiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as FirstAidKit };