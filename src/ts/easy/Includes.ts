type Includes<T extends string[], P extends string> = P extends T[number] ? true : false

type Include = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], "Santana">
//   ^?