async function es2017Proof(samp) {
    let out = await `${samp} is great!`;
    return out;
}
es2017Proof('NodeJS')
    .then(console.log);