function paginate(current, max) {
	if (!current || !max) return null

	let prev = current === 1 ? null : current - 1,
			next = current === max ? null : current + 1,
			items = [1]

	if (current === 1 && max === 1) return {current, prev, next, items}
	if (current > 4) items.push('…')

	let r = 2, r1 = current - r, r2 = current + r

	for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

	if (r2 + 1 < max) items.push('…')
	if (r2 < max) items.push(max)

	return items
}
console.log("1   =", paginate(1, 10, 5).join(" "));
console.log("2   =", paginate(2, 10, 5).join(" "));
console.log("3   =", paginate(3, 10, 5).join(" "));
console.log("4   =", paginate(4, 10, 5).join(" "));
console.log("5   =", paginate(5, 10, 5).join(" "));
console.log("6   =", paginate(6, 10, 5).join(" "));
console.log("7   =", paginate(7, 10, 5).join(" "));
console.log("8   =", paginate(8, 10, 5).join(" "));
console.log("9   =", paginate(9, 10, 5).join(" "));
console.log("10  =", paginate(10, 10, 5).join(" "));
