let total = 0;
limpar();
function adicionar(){
    let produto = document.getElementById('produto').value;
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = valorUnitario * quantidade;
    let lista = document.getElementById('lista-produtos');
    lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">${preco}</span></section></section>`;
    total = total + preco;
    let totalHTML = document.getElementById('valor-total');
    totalHTML.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;
}
function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 0;
}