import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDk2YTgsOCwwLDAsMCw1LjY2LTIuMzRMMTI4LDE3OS4zMWwyNi4zNCwyNi4zNUE4LDgsMCwwLDAsMTYwLDIwOGg2NGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhabTAsMTQ0SDE2My4zMWwtMjQtMjRhMTYsMTYsMCwwLDAtMjIuNjIsMGwtMjQsMjRIMzJWNjRIMjI0Wk04MCwxNjBhMzIsMzIsMCwxLDAtMzItMzJBMzIsMzIsMCwwLDAsODAsMTYwWm0wLTQ4YTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDgwLDExMlptOTYsNDhhMzIsMzIsMCwxLDAtMzItMzJBMzIsMzIsMCwwLDAsMTc2LDE2MFptMC00OGExNiwxNiwwLDEsMS0xNiwxNkExNiwxNiwwLDAsMSwxNzYsMTEyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTJIMzJBMTIsMTIsMCwwLDAsMjAsNjRWMTkyYTEyLDEyLDAsMCwwLDEyLDEySDk2YTQsNCwwLDAsMCwyLjgzLTEuMTdsMjYuMzQtMjYuMzRhNC4wOCw0LjA4LDAsMCwxLDUuNjYsMGwyNi4zNCwyNi4zNEE0LDQsMCwwLDAsMTYwLDIwNGg2NGExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwyMjQsNTJabTQsMTQwYTQsNCwwLDAsMS00LDRIMTYxLjY2bC0yNS4xNy0yNS4xN2ExMiwxMiwwLDAsMC0xNywwTDk0LjM0LDE5NkgzMmE0LDQsMCwwLDEtNC00VjY0YTQsNCwwLDAsMSw0LTRIMjI0YTQsNCwwLDAsMSw0LDRaTTgwLDEwMGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCw4MCwxMDBabTAsNDhhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsODAsMTQ4Wm05Ni00OGEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCwxNzYsMTAwWm0wLDQ4YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDE3NiwxNDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJBMTQsMTQsMCwwLDAsMTgsNjRWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDk2YTYsNiwwLDAsMCw0LjI0LTEuNzZsMjYuMzUtMjYuMzRhMiwyLDAsMCwxLDIuODIsMGwyNi4zNSwyNi4zNEE2LDYsMCwwLDAsMTYwLDIwNmg2NGExNCwxNCwwLDAsMCwxNC0xNFY2NEExNCwxNCwwLDAsMCwyMjQsNTBabTIsMTQyYTIsMiwwLDAsMS0yLDJIMTYyLjQ5TDEzNy45LDE2OS40MmExNCwxNCwwLDAsMC0xOS44LDBMOTMuNTEsMTk0SDMyYTIsMiwwLDAsMS0yLTJWNjRhMiwyLDAsMCwxLDItMkgyMjRhMiwyLDAsMCwxLDIsMlpNODAsOThhMzAsMzAsMCwxLDAsMzAsMzBBMzAsMzAsMCwwLDAsODAsOThabTAsNDhhMTgsMTgsMCwxLDEsMTgtMThBMTgsMTgsMCwwLDEsODAsMTQ2Wm05Ni00OGEzMCwzMCwwLDEsMCwzMCwzMEEzMCwzMCwwLDAsMCwxNzYsOThabTAsNDhhMTgsMTgsMCwxLDEsMTgtMThBMTgsMTgsMCwwLDEsMTc2LDE0NloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDRIMzJBMjAsMjAsMCwwLDAsMTIsNjRWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDk2YTEyLDEyLDAsMCwwLDguNDktMy41MUwxMjgsMTg1bDIzLjUxLDIzLjUyQTEyLDEyLDAsMCwwLDE2MCwyMTJoNjRhMjAsMjAsMCwwLDAsMjAtMjBWNjRBMjAsMjAsMCwwLDAsMjI0LDQ0Wm0tNCwxNDRIMTY1bC0yMi44My0yMi44M2EyMCwyMCwwLDAsMC0yOC4yOCwwTDkxLDE4OEgzNlY2OEgyMjBaTTgyLDE2MGEzNCwzNCwwLDEsMC0zNC0zNEEzNCwzNCwwLDAsMCw4MiwxNjBabTAtNDRhMTAsMTAsMCwxLDEtMTAsMTBBMTAsMTAsMCwwLDEsODIsMTE2Wm05Miw0NGEzNCwzNCwwLDEsMC0zNC0zNEEzNCwzNCwwLDAsMCwxNzQsMTYwWm0wLTQ0YTEwLDEwLDAsMSwxLTEwLDEwQTEwLDEwLDAsMCwxLDE3NCwxMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJBMTYsMTYsMCwwLDAsMTYsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDk2YTgsOCwwLDAsMCw1LjY2LTIuMzRMMTI4LDE3OS4zMWwyNi4zNCwyNi4zNUE4LDgsMCwwLDAsMTYwLDIwOGg2NGExNiwxNiwwLDAsMCwxNi0xNlY2NEExNiwxNiwwLDAsMCwyMjQsNDhaTTgwLDE1MmEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSw4MCwxNTJabTk2LDBhMjQsMjQsMCwxLDEsMjQtMjRBMjQsMjQsMCwwLDEsMTc2LDE1MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZIMzJhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDgsOEg5NmwyNi4zNC0yNi4zNGE4LDgsMCwwLDEsMTEuMzIsMEwxNjAsMjAwaDY0YTgsOCwwLDAsMCw4LThWNjRBOCw4LDAsMCwwLDIyNCw1NlpNODAsMTUyYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDgwLDE1MlptOTYsMGEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSwxNzYsMTUyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCw0OEgzMkExNiwxNiwwLDAsMCwxNiw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIOTZhOCw4LDAsMCwwLDUuNjYtMi4zNEwxMjgsMTc5LjMxbDI2LjM0LDI2LjM1QTgsOCwwLDAsMCwxNjAsMjA4aDY0YTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDIyNCw0OFptMCwxNDRIMTYzLjMxbC0yNC0yNGExNiwxNiwwLDAsMC0yMi42MiwwbC0yNCwyNEgzMlY2NEgyMjRaTTgwLDE2MGEzMiwzMiwwLDEsMC0zMi0zMkEzMiwzMiwwLDAsMCw4MCwxNjBabTAtNDhhMTYsMTYsMCwxLDEtMTYsMTZBMTYsMTYsMCwwLDEsODAsMTEyWm05Niw0OGEzMiwzMiwwLDEsMC0zMi0zMkEzMiwzMiwwLDAsMCwxNzYsMTYwWm0wLTQ4YTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDE3NiwxMTJaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as GoogleCardboardLogo };