# Uso de Imagens Via Links Externos

Este site está usando imagens via links externos do Unsplash. Isso é útil para desenvolvimento e demonstração, mas para um site em produção, recomenda-se:

1. Baixar as imagens e hospedá-las em seu próprio servidor
2. Otimizar as imagens para carregamento mais rápido
3. Fornecer versões de diferentes tamanhos para diferentes dispositivos

## Links de Imagens Utilizados

| Serviço | URL da Imagem |
|---------|--------------|
| Banner Principal | https://images.unsplash.com/photo-1520340356584-f9917d1eea6f |
| Lavagem Simples | https://images.unsplash.com/photo-1605288214657-d63cdc1e8dad |
| Lavagem Completa | https://images.unsplash.com/photo-1574638823055-a29e4a57de98 |
| Lavagem + Cera | https://images.unsplash.com/photo-1631252169627-55c92add8b57 |
| Polimento | https://images.unsplash.com/photo-1518406432532-9cbef5697723 |
| Higienização Interna | https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8 |
| Lavagem de Motor | https://images.unsplash.com/photo-1492144534655-ae79c964c9d7 |

## Como Usar os Links

Os links acima são utilizados diretamente nos componentes:

```jsx
// Exemplo de como os links são usados
<div 
  className="service-image" 
  style={{ backgroundImage: `url(${imageUrl})` }}
>
```

## Parâmetros do Unsplash

Os links do Unsplash permitem parâmetros para ajustar as imagens:

- `w=800`: Define a largura da imagem como 800px
- `q=80`: Define a qualidade da imagem como 80%
- `auto=format`: Permite que o Unsplash escolha o melhor formato para o navegador

Exemplo completo: `https://images.unsplash.com/photo-xxx?auto=format&fit=crop&w=800&q=80`

## Créditos

Todas as imagens são de fotógrafos do Unsplash. Em um site de produção, considere dar os devidos créditos aos autores das imagens.
