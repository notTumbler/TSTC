type isIn = isInArr2<["ts", "", "vue", "react"], "tsx">;
// expected to be `false`

// -- 1
type isInArr<Arr extends string[], Str extends string> = Str extends Arr[number]
  ? true
  : false;

// -- 2
type isInArr2<A extends string[], S extends string> = {
  [K in A[number]]: true;
}[S] extends true
  ? true
  : false;
