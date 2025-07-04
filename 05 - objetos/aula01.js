const pessoa = {
    nome: 'Gláucia',
    idade: 55,
    
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
// Acessando propriedades do objeto

pessoa.descrever(); // Meu nome é João e minha idade é 30