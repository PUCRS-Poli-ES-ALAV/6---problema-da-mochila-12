const logs = new Map();

const fibo = (n, data)  => {
    data.iteracoes++
    
    if(n <= 1) {
        data.instrucoes += 1
        return n;
    }
    
    data.instrucoes += 4
    return fibo(n - 1, data) + fibo(n - 2, data)
}


const medirPerf = (n) => {
    const data = {
        iteracoes: 0,
        instrucoes: 0,
        execucao: 0
    }
    const start = performance.now()
    fibo(n, data)
    const end = performance.now()
    data.execucao = end - start
    logs.set(n, data)
}

medirPerf(4)
medirPerf(8)
medirPerf(16)
medirPerf(32)

const csv = Array.from(logs.entries()).map(([n, data]) => {
    return `${n},${data.iterations},${data.instrucoes},${data.execucao.toFixed(2)}ms`
})

csv.unshift('N,Iterações,Instruções,Tempo (ms)')

console.log(csv.join('\n'))