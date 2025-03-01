/**
 * Script para gerar arquivos favicon a partir da base64
 * Execute este script para criar os arquivos na pasta correta
 */
const fs = require('fs');
const path = require('path');

// Base64 do ícone de carro
const carFaviconBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANVSURBVFhH7ZbPS1RRFMC/987MmDOOjjH+KSctsDBMUFqkUFEQRC36A4KgNm1atGxTRLTIsE1FQUEtgqhdRRBBYFHRKogoEErL0h9qmmgz47x37/f13rkzmpGvmcCNH3zuPfe+d+75ce+59ynyH4Ms1+vCbrdDEIR/A13X0el0/GYBdrudClmWub9ELBaDKPLbBdxuN63UZrPxlbXB5/NRYIqiYC6X4yt/h2VZtDPLsstXFuHz+XB2dpZWKcsyTY7jcPEKvF4vRKNRFAQBlELCwcFBKbvdHqyurobJyUkYGRmhzmthmiY2NTXh4eEhDA0NwfT0NC8pxev1QjgchmQyuaJzls/no2mSTqdJTUUQi8UwmUyiqqool8sRTdPQMIy8TtM0DAQCvMbfiUQiRItyuYzFYhFLpRLZl8n8wsICDzsaXdf5LI/H44FoNArJVApqA9vgwoUeVCoVUBQFBEGEeDwO9Y31kM1m4OLFCyVdL7e1H2sHj8cLiUSCh+ThjkQiODExgWpdy6Dv2Qs4f/4cduzYDvmcBqZZhr3794KmzdHmmLla9ImRuHw9rGjB5kjMzc0FBgcHweVywfDHYXh07z7cvHUDdu7cnrc8l0Na2RdvP8bHz17C4Mg3eP/1K7y9duXuxNjXKxbDig7Avlwms3dIkichHouDrutw5MgR2r6T7iSEw3lrf/95sFsNcLLuFDx58PjLlSuXjt+9e/eq5Siw8PCP9PPnE729vaAoTvYSKtntduL1eunxOXb8GOs7P38urutvzl7teRYKhVLLRwFbTz6cfHn03MmDm9hCk4bCYU/kNwwGg9C8pxm6urqeJxKJ/pGRkS+JRCK/roDe3t6hTCbzSdNyCgv/AKVSSfL7/TQIjW6ys7MTUqnUdRYzvUNDQ8O8KNjbuMmys7lWs+fjwMBAluXDaY/Hc0zTtKNmUW3zvvkbc75+Qyfr+jO2t7e3gj3yK3r93+1m16/x/AlcHR2dRwrFUkDA4rZMNj1kGCZkMlnWJxVl01AdqAJZccLdu3cvsfXTgUBgvqen5/vIyEieVeUFvdEFO1paDhUKxZ1OpwNMUwfTMKFYKpG8rsOVa9du6HqxSxSF5rGxsRRb/4MglkTRnJiYSLCWSyyy34JMbR8+vJv3/Hwj0v8Agv4NBWvFb7i1J7yTC/5yAAAAAElFTkSuQmCC";

// Função para converter Base64 para Buffer
function base64ToBuffer(base64) {
    // Remover o prefixo (e.g., "data:image/png;base64,")
    const base64String = base64.split(',')[1];
    return Buffer.from(base64String, 'base64');
}

// Função para criar a pasta e salvar o arquivo
function saveFaviconFile() {
    // Diretório para os favicons
    const faviconDir = path.join(__dirname, '../../public/favicon');

    // Criar diretório se não existir
    if (!fs.existsSync(faviconDir)) {
        fs.mkdirSync(faviconDir, { recursive: true });
        console.log(`Criado diretório: ${faviconDir}`);
    }

    // Converter a string Base64 para Buffer
    const buffer = base64ToBuffer(carFaviconBase64);

    // Caminho para o arquivo favicon.ico
    const faviconPath = path.join(faviconDir, 'favicon.ico');

    // Salvar o arquivo
    fs.writeFileSync(faviconPath, buffer);
    console.log(`Favicon criado com sucesso em: ${faviconPath}`);
}

// Executar a função
saveFaviconFile();

console.log(`
Para converter manualmente e criar outros tamanhos:
1. Use o Base64 para gerar uma imagem PNG (sites como base64.guru)
2. Use essa imagem no site realfavicongenerator.net para criar todos os tamanhos necessários
3. Salve os arquivos gerados na pasta /public/favicon/
`);
