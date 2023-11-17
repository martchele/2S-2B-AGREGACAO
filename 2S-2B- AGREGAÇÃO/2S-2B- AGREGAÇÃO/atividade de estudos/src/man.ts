import { Produto} from "./model/Produto";
import { CarrinhoDeCompra } from "./model/CarrinhoDeCompra";

const produto1 = new Produto(`meia`,12.50);
const produto2 = new Produto(`camiseta`, 62.75);
const produto3 = new Produto(`bermuda`, 50.48);
const produto4 = new Produto(`calça`, 150.59);
const produto5 = new Produto(`boné`, 35.99);

const CarrinhoDeCompras = new CarrinhoDeCompra();
CarrinhoDeCompras.inserirProdutos(produto1, produto2, produto3, produto4, produto5);
console.log(`Quantidade de itens no carrinho: ${CarrinhoDeCompras.quantidadeProdutos()}`);
console.log(`Valor Total: ${CarrinhoDeCompras.valorTotal()}`);