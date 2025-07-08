function isPrime(n) {
    if (n <= 1n) return false;
    if (n === 2n) return true;
    if (n % 2n === 0n) return false;
    for (let i = 3n; i * i <= n; i += 2n) {
        if (n % i === 0n) return false;
    }
    return true;
}

function findFractionalFactor() {
    const input = document.getElementById("inputNumber").value.trim();
    const O = BigInt(input);

    if (O % 2n === 0n || O <= 1n) {
        document.getElementById("result").innerText = "Veuillez entrer un nombre impair supérieur à 1.";
        return;
    }

    const denominators = [];
    for (let i = 0; i <= 1700; i++) {
        let base = 0.00125 + i * 0.03125;
        denominators.push(parseFloat(base.toFixed(5)));
    }

    for (let denom of denominators) {
        const approxQuotient = O / BigInt(Math.round(denom * 10 ** 5));
        const realQuotient = Number(O) / denom;
        if (Number.isInteger(realQuotient)) {
            const pow2 = 1 / (denom - Math.floor(denom));
            if (pow2 % 1 !== 0 || pow2 < 1 || (pow2 & (pow2 - 1)) !== 0) continue;

            const candidate = BigInt(realQuotient / pow2);
            if (O % candidate === 0n && isPrime(candidate)) {
                document.getElementById("result").innerText = `Facteur premier trouvé : ${candidate}`;
                return;
            }
        }
    }

    document.getElementById("result").innerText = "Aucun facteur premier n'a été trouvé en utilisant cette méthode.";
}
