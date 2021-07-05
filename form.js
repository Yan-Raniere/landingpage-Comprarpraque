function adicionarProduto(){
    ingrediente = document.getElementById('product').value;
    textarea = document.getElementById('lista-itens').value;
    document.getElementById('lista-itens').value = textarea+ingrediente;
}