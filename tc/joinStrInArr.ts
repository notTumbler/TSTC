type JoinStrArray<Arr extends string[], Separator extends string, Result extends string = ""> = Arr extends [infer First, ...infer Rest] ? Rest extends string[] ? JoinStrArray<[Rest], Separator, `${First}${Separator}`> : Result
: Result






// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"