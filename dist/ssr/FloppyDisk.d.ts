import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuMzEsNzIsMTg0LDM2LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDE3Mi42OSwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjgzLjMxQTE1Ljg2LDE1Ljg2LDAsMCwwLDIxOS4zMSw3MlpNMTY4LDIwOEg4OFYxNTJoODBabTQwLDBIMTg0VjE1MmExNiwxNiwwLDAsMC0xNi0xNkg4OGExNiwxNiwwLDAsMC0xNiwxNnY1Nkg0OFY0OEgxNzIuNjlMMjA4LDgzLjMxWk0xNjAsNzJhOCw4LDAsMCwxLTgsOEg5NmE4LDgsMCwwLDEsMC0xNmg1NkE4LDgsMCwwLDEsMTYwLDcyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksNzQuODMsMTgxLjE3LDM5LjUxQTExLjkzLDExLjkzLDAsMCwwLDE3Mi42OSwzNkg0OEExMiwxMiwwLDAsMCwzNiw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjgzLjMxQTExLjkzLDExLjkzLDAsMCwwLDIxNi40OSw3NC44M1pNMTcyLDIxMkg4NFYxNTJhNCw0LDAsMCwxLDQtNGg4MGE0LDQsMCwwLDEsNCw0Wm00MC00YTQsNCwwLDAsMS00LDRIMTgwVjE1MmExMiwxMiwwLDAsMC0xMi0xMkg4OGExMiwxMiwwLDAsMC0xMiwxMnY2MEg0OGE0LDQsMCwwLDEtNC00VjQ4YTQsNCwwLDAsMSw0LTRIMTcyLjY5YTQsNCwwLDAsMSwyLjgyLDEuMTdsMzUuMzIsMzUuMzJBNCw0LDAsMCwxLDIxMiw4My4zMVpNMTU2LDcyYTQsNCwwLDAsMS00LDRIOTZhNCw0LDAsMCwxLDAtOGg1NkE0LDQsMCwwLDEsMTU2LDcyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTcuOSw3My40MiwxODIuNTgsMzguMWExMy45LDEzLjksMCwwLDAtOS44OS00LjFINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY4My4zMUExMy45LDEzLjksMCwwLDAsMjE3LjksNzMuNDJaTTE3MCwyMTBIODZWMTUyYTIsMiwwLDAsMSwyLTJoODBhMiwyLDAsMCwxLDIsMlptNDAtMmEyLDIsMCwwLDEtMiwySDE4MlYxNTJhMTQsMTQsMCwwLDAtMTQtMTRIODhhMTQsMTQsMCwwLDAtMTQsMTR2NThINDhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDE3Mi42OWEyLDIsMCwwLDEsMS40MS41OEwyMDkuNDIsODEuOWEyLDIsMCwwLDEsLjU4LDEuNDFaTTE1OCw3MmE2LDYsMCwwLDEtNiw2SDk2YTYsNiwwLDAsMSwwLTEyaDU2QTYsNiwwLDAsMSwxNTgsNzJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMTQsNjkuMTcsMTg2LjgzLDMzLjg2QTE5Ljg2LDE5Ljg2LDAsMCwwLDE3Mi42OSwyOEg0OEEyMCwyMCwwLDAsMCwyOCw0OFYyMDhhMjAsMjAsMCwwLDAsMjAsMjBIMjA4YTIwLDIwLDAsMCwwLDIwLTIwVjgzLjMxQTE5Ljg2LDE5Ljg2LDAsMCwwLDIyMi4xNCw2OS4xN1pNMTY0LDIwNEg5MlYxNjBoNzJabTQwLDBIMTg4VjE1NmEyMCwyMCwwLDAsMC0yMC0yMEg4OGEyMCwyMCwwLDAsMC0yMCwyMHY0OEg1MlY1MkgxNzFsMzMsMzNaTTE2NCw4NGExMiwxMiwwLDAsMS0xMiwxMkg5NmExMiwxMiwwLDAsMSwwLTI0aDU2QTEyLDEyLDAsMCwxLDE2NCw4NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuMzEsNzIsMTg0LDM2LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDE3Mi42OSwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjgzLjMxQTE1Ljg2LDE1Ljg2LDAsMCwwLDIxOS4zMSw3MlpNMjA4LDIwOEgxODRWMTUyYTE2LDE2LDAsMCwwLTE2LTE2SDg4YTE2LDE2LDAsMCwwLTE2LDE2djU2SDQ4VjQ4SDE3Mi42OUwyMDgsODMuMzFaTTE2MCw3MmE4LDgsMCwwLDEtOCw4SDk2YTgsOCwwLDAsMSwwLTE2aDU2QTgsOCwwLDAsMSwxNjAsNzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODMuMzFWMjA4YTgsOCwwLDAsMS04LDhIMTc2VjE1MmE4LDgsMCwwLDAtOC04SDg4YTgsOCwwLDAsMC04LDh2NjRINDhhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04SDE3Mi42OWE4LDgsMCwwLDEsNS42NSwyLjM0bDM1LjMyLDM1LjMyQTgsOCwwLDAsMSwyMTYsODMuMzFaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE5LjMxLDcyLDE4NCwzNi42OUExNS44NiwxNS44NiwwLDAsMCwxNzIuNjksMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY4My4zMUExNS44NiwxNS44NiwwLDAsMCwyMTkuMzEsNzJaTTE2OCwyMDhIODhWMTUyaDgwWm00MCwwSDE4NFYxNTJhMTYsMTYsMCwwLDAtMTYtMTZIODhhMTYsMTYsMCwwLDAtMTYsMTZ2NTZINDhWNDhIMTcyLjY5TDIwOCw4My4zMVpNMTYwLDcyYTgsOCwwLDAsMS04LDhIOTZhOCw4LDAsMCwxLDAtMTZoNTZBOCw4LDAsMCwxLDE2MCw3MloiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as FloppyDisk };