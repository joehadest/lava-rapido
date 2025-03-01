Esta pasta deve conter as seguintes imagens para o projeto:
- car-wash.jpg: imagem de fundo para o hero banner na página inicial

=== IMAGENS TEMPORARIAMENTE DISPENSÁVEIS ===

O projeto foi configurado para funcionar sem imagens por enquanto.

Quando quiser adicionar imagens ao site:

1. Adicione uma imagem chamada "car-wash.jpg" nesta pasta para o banner principal

2. No arquivo main.css, altere a linha:
   background-image: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
   Para:
   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../images/car-wash.jpg');

3. Para as imagens dos serviços, crie uma pasta "images" dentro de "public" e adicione:
   - lavagem-simples.jpg
   - lavagem-completa.jpg 
   - lavagem-cera.jpg
   - polimento.jpg
   - higienizacao.jpg
   - lavagem-motor.jpg

4. No arquivo ServiceCard.jsx, remova a classe "placeholder" e a div "placeholder-text"
   para que as imagens reais sejam exibidas.
