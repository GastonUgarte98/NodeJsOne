const os = require('os');

const deviceInfo = () => `
Device Info:
    Equipo: ${os.hostname()}         
    Sistema Operativo: 
        - Tipo: ${os.type()}
        - Version:${os.release()}
        - Plataforma: ${os.platform()}
        - Arquitectura: ${os.arch()}
        - Tiempo de actividad: ${Math.round(os.uptime() /60 /60)}hs
        - MEMORIA RAM: ${Math.round(os.totalmem() / 1024 / 1024)}MB
        `

    module.exports = deviceInfo;