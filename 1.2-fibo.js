const logs = new Map();

const fibo = (n, data) => {
    data.iteracoes++
    
    if(n <= 1) {
        data.instrucoes += 1 
        return n;
    }

    data.instrucoes += 1  
    
    const f = [0, 1]  
    
    for(let i = 2; i <= n; i++) {
        data.iteracoes++
        data.instrucoes += 3  
        f[i] = f[i-1] + f[i-2]
    }
    
    data.instrucoes += 1  
    return f[n]
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
medirPerf(128)
medirPerf(1000)
medirPerf(10000)

const csv = Array.from(logs.entries()).map(([n, data]) => {
    return `${n},${data.iteracoes},${data.instrucoes},${data.execucao.toFixed(2)}ms`
})

csv.unshift('N,Iterações,Instruções,Tempo (ms)')

console.log(csv.join('\n'))